interface BielOptions {
    bielButtonText?: string;
    version?: string;
    customFont?: string;
    project?: string;
    buttonStyle?: string;
    buttonPosition?: string;
    modalPosition?: string;
    hideIcon?: boolean;
    hideExpandButton?: boolean;
    expandModal?: boolean;
    errorMessage404?: string;
    errorMessage403?: string;
    errorMessageDefault?: string;
    footerText?: string;
}

const DEFAULT_OPTIONS: BielOptions = {
    bielButtonText: 'Ask AI',
    modalPosition: "bottom-right",
    buttonStyle: "dark",
    buttonPosition: 'bottom-right',
};

function camelToKebab(string: string): string {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

function generateBielScript(options: BielOptions): string {
    const mergedProps: BielOptions = { ...DEFAULT_OPTIONS, ...options };
    const { project, bielButtonText, ...bielProps } = mergedProps;
    let scriptContent = `
        const bielButton = document.createElement('biel-button');
        bielButton.setAttribute('project', '${project || ""}');
    `;

    Object.entries(bielProps).forEach(([key, value]) => {
        if (value !== undefined) {
            scriptContent += `
                bielButton.setAttribute('${camelToKebab(key)}', '${value.toString()}');
            `;
        }
    });

    scriptContent += `
        bielButton.textContent = '${bielButtonText || DEFAULT_OPTIONS.bielButtonText}';
        document.body.appendChild(bielButton);
    `;

    return scriptContent;
}

module.exports = function (_context: any, options: BielOptions) {

    const version = options.version || 'latest'; 
    return {
        name: 'docusaurus-biel-plugin',

        injectHtmlTags() {
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
                        innerHTML: generateBielScript(options),
                    }
                ]
            };
        },
    };
};
