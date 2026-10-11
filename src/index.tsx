import type { Plugin } from "@docusaurus/types"
import { BielOptions, DEFAULT_OPTIONS, WIDGET_VERSION } from "./conf"
import { camelToKebab } from "./utils"

function scriptJson(value: unknown): string {
  return JSON.stringify(value).replace(
    /[<>&\u2028\u2029]/g,
    (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`,
  )
}

function generateBielScript(options: BielOptions): string {
  const {
    project,
    bielButtonText,
    enable,
    version: _version,
    ...props
  } = {
    ...DEFAULT_OPTIONS,
    ...options,
  }
  if (!enable) return ""
  const attributes = Object.entries({ project: project ?? "", ...props })
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, camelToKebab(key), value])
  const payload = scriptJson({
    props: attributes,
    text: bielButtonText ?? DEFAULT_OPTIONS.bielButtonText,
  })
  return `
    customElements.whenDefined('biel-button').then(() => {
      const options = ${payload};
      const bielButton = document.createElement('biel-button');
      options.props.forEach(([property, attribute, value]) => {
        bielButton[property] = value;
        if (value === null || typeof value !== 'object') {
          bielButton.setAttribute(attribute, String(value));
        }
      });
      bielButton.textContent = options.text;
      document.body.appendChild(bielButton);
    });
  `
}

function bielPlugin(_context: unknown, options: BielOptions = {}): Plugin {
  const version = options.version || WIDGET_VERSION
  const encodedVersion = encodeURIComponent(version)
  const base = `https://cdn.jsdelivr.net/npm/biel-search@${encodedVersion}/dist/biel-search`
  return {
    name: "docusaurus-biel-plugin",
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: "link",
            attributes: { rel: "stylesheet", href: `${base}/biel-search.css` },
          },
        ],
        postBodyTags: [
          {
            tagName: "script",
            attributes: { type: "module", src: `${base}/biel-search.esm.js` },
          },
          {
            tagName: "script",
            innerHTML: generateBielScript(options),
          },
        ],
      }
    },
    async contentLoaded({ actions }) {
      actions.setGlobalData(options)
    },
  }
}

export = bielPlugin
