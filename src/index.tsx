import { BielOptions, DEFAULT_OPTIONS } from './conf';
import { camelToKebab } from './utils';


function generateBielScript(options: BielOptions): string {
    const mergedProps: BielOptions = { ...DEFAULT_OPTIONS, ...options };
    const { project, bielButtonText, enable, ...bielProps } = mergedProps;
    let scriptContent = '';

    if (enable) {
        scriptContent += `
            const bielButton = document.createElement('biel-button');
            bielButton.setAttribute('project', '${project || ""}');
        `;

        Object.entries(bielProps).forEach(([key, value]) => {
            if (key !== 'enable' && key !== 'bielButtonText' && key !== 'version' && value !== undefined ) {
                scriptContent += `
                    bielButton.setAttribute('${camelToKebab(key)}', '${value.toString()}');
                `;
            }
        });

        scriptContent += `
            bielButton.textContent = '${bielButtonText || DEFAULT_OPTIONS.bielButtonText}';
            document.body.appendChild(bielButton);
        `;
    }

    return scriptContent;
}

module.exports = function (_context: any, options: BielOptions) {
    const version = options.version || 'latest';

    return {
        name: 'docusaurus-biel-plugin',

        injectHtmlTags() {
            const mergedOptions: BielOptions = { ...DEFAULT_OPTIONS, ...options };

            return {
                headTags: [
                    {
                        tagName: 'link',
                        attributes: {
                            rel: 'stylesheet',
                            href: `https://cdn.jsdelivr.net/npm/biel-search@${version}/dist/biel-search/biel-search.css`,
                        },
                    },
                ],
                postBodyTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            type: 'module',
                            src: `https://cdn.jsdelivr.net/npm/biel-search@${version}/dist/biel-search/biel-search.esm.js`,
                        },
                    },
                    {
                        tagName: 'script',
                        innerHTML: generateBielScript(mergedOptions),
                    },
                ],
            };
        },


        async contentLoaded({ actions }: { actions: any }) {
            const { setGlobalData } = actions;
            setGlobalData(options);
        },

    };
};
