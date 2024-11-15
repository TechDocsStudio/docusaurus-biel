export interface BielOptions {
    enable?: boolean;
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

    // New options for BielSearch
    search?: {
        enable?: boolean;
        searchButtonText: string;
        buttonStyle?: string; 
        modalPosition?: string;
        hideIcon?: string; 
        hideCtrlK?: string;
        searchPlaceholder?: string;
        hideFilters?: string;
    };
}


export const DEFAULT_OPTIONS: BielOptions = {
    bielButtonText: 'Ask AI',
    modalPosition: "bottom-right",
    buttonStyle: "dark",
    buttonPosition: 'bottom-right',
    search: {
        enable: false,
        searchButtonText: "Search...",
        buttonStyle: "rounded",
    },
    enable: true,
};