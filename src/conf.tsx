export interface BielOptions {
    enable?: boolean;
    bielButtonText?: string;
    version?: string;
    headerTitle?: string;
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


export const DEFAULT_OPTIONS: BielOptions = {
    bielButtonText: 'Ask AI',
    modalPosition: "bottom-right",
    buttonStyle: "dark",
    buttonPosition: 'bottom-right',
    enable: true,
};