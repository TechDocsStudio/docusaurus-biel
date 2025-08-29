export interface BielOptions {
    enable?: boolean;
    project?: string;
    version?: string;
    
    // biel-button
    aiIcon?: string;
    apiKey?: string;
    bielButtonText?: string;
    buttonPosition?: string;
    buttonStyle?: string;
    customFont?: boolean;
    hideAvatars?: boolean;
    hideIcon?: boolean;
    
    // biel-bot
    disableInput?: boolean;
    email?: string;
    expandModal?: boolean;
    hideCloseButton?: boolean;
    hideExpandButton?: boolean;
    hideRefreshButton?: boolean;
    hideFeedback?: boolean;
    modalPosition?: string;
    showTermsModal?: boolean;

    // biel-bot text
    errorMessage403?: string;
    errorMessage404?: string;
    errorMessageDefault?: string;
    footerText?: string;
    headerTitle?: string;
    inputPlaceholderText?: string;
    sendButtonText?: string;
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
