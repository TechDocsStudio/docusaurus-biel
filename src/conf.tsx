export interface BielOptions {
    enable?: boolean;
    project?: string;
    version?: string;
    bielButtonText?: string;
    buttonPosition?: string;
    buttonStyle?: string;
    customFont?: string;
    email?: string;
    errorMessage403?: string;
    errorMessage404?: string;
    errorMessageDefault?: string;
    expandModal?: boolean;
    footerText?: string;
    headerTitle?: string;
    hideExpandButton?: boolean;
    hideFeedback?: boolean;
    hideIcon?: boolean;
    inputPlaceholderText?: string;
    modalPosition?: string;
    sendButtonText?: string;
    showTermsModal?: boolean;
    sourcesText?: string;
    suggestedQuestions?: string;
    suggestedQuestionsTitle?: string;
    termsCheckboxText?: string;
    termsDescription?: string;
    termsTitle?: string;
    welcomeMessage?: string;
}


export const DEFAULT_OPTIONS: BielOptions = {
    bielButtonText: 'Ask AI',
    modalPosition: "bottom-right",
    buttonStyle: "dark",
    buttonPosition: 'bottom-right',
    enable: true,
};
