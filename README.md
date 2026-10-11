# AI chatbot plugin for Docusaurus

Ask AI chatbot plugin for Docusaurus sites, powered by [Biel.ai](https://biel.ai).

![AI chatbot Docusaurus](https://biel.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcarousel-02.d9a9a331.png&w=1200&q=75)

Add AI to your Docusaurus site using Biel.ai's official plugin.
The integration works with any Docusaurus v3 site and adds both chat and search capabilities to your documentation.

*Note: A Biel.ai plan is required to use this plugin. Try it free for 14 days—no credit card required.*

## Key features

- AI chatbot that provides instant responses to documentation queries. 
- AI search engine for quick and relevant information retrieval.
- Integration with Docusaurus 3.
- Customizable to match your site's branding and user needs.

## Get started

See the [Docusaurus AI chatbot integration guide](https://docs.biel.ai/assets/images/biel-widget-docs-bd28548cf26a37bcb7c496487280bbfe.png) for installation and setup instructions.



## Support

Need assistance? [Contact us](https://docs.biel.ai/support) for help.

## License

Copyright (c) 2024 Biel.ai  

Licensed under the [MIT License](LICENSE).

## Widget compatibility and development

The default CDN artifact follows `biel-search@latest`. Set `version` explicitly (for example, `version: "0.1.94"`) to select a specific published artifact. The package dependency also follows `latest`; normal development lockfiles record the resolved version used for reproducible builds and canonical public component types. Arrays/objects are assigned as properties after the custom element is defined. Configuration is serialized for script context, and `bielButtonText` is literal text. Existing `enable: false` disables the button.

Validated matrix: Docusaurus 3.0.0 and 3.10.2, React 18.3.1, Webpack 5.96.1; site builds and plugin compilation ran on Node 24.21.0 (current Docusaurus requires Node >=20). The diagnostic pins Webpack because an unpinned current graph failed in the older framework's theme before loading this plugin.

Run `npm ci`, `npm run build`, and `node tests/packed-site.cjs /tmp/biel-sites` to build/pack/install the actual plugin into both site consumers. With Puppeteer 24.43.1 available on NODE_PATH and a trusted Chrome executable, run `PUPPETEER_EXECUTABLE_PATH=/path/to/chrome node tests/browser-contract.cjs /tmp/biel-sites/3.10.2`. The browser maps the default `latest` CDN URLs to the actual installed widget assets locally, fakes API/WS, blocks external requests, and checks literal quotes/Unicode/script-closing text, boolean/array props and the button-to-bot contract. Existing scripts and workflows are unchanged.

The current development lockfiles resolve widget 0.1.94. The browser fixture verifies the generated `latest` URLs with that local artifact; it does not assert a live CDN resolution. The separate widget sanitizer/dependency remediation is not yet published in that artifact. After its release, refresh the development locks and repeat the artifact/browser matrix. Users who configure a numeric `version` keep that explicit selection.
