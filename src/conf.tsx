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
    metadata?: string;
    hideAvatars?: boolean;
    hideIcon?: boolean;

    // biel-bot
    disableInput?: boolean;
    email?: string;
    expandModal?: boolean;
    hideCloseButton?: boolean;
    hideConnectButton?: boolean;
    hideExpandButton?: boolean;
    hideRefreshButton?: boolean;
    hideSettingsButton?: boolean;
    hideFeedback?: boolean;
    hideSources?: boolean;
    hideTooltips?: boolean;
    keepConversation?: boolean;
    mcpServerUrl?: string;
    modalPosition?: string;
    showTermsModal?: boolean;
    thinkModeEnabled?: boolean;

    // biel-bot text
    assistantLabel?: string;
    closeButtonText?: string;
    collapseButtonText?: string;
    connectButtonText?: string;
    errorMessage403?: string;
    errorMessage404?: string;
    errorMessageDefault?: string;
    expandButtonText?: string;
    footerText?: string;
    headerTitle?: string;
    inputPlaceholderText?: string;
    mcpClaudeDescription?: string;
    mcpClaudeText?: string;
    mcpCopiedText?: string;
    mcpCopilotDescription?: string;
    mcpCopilotText?: string;
    mcpCursorDescription?: string;
    mcpCursorText?: string;
    mcpUrlCopiedDescription?: string;
    mcpClaudeCopiedDescription?: string;
    mcpUrlDescription?: string;
    mcpUrlText?: string;
    refreshButtonText?: string;
    sendButtonText?: string;
    settingsButtonText?: string;
    sourcesText?: string;
    suggestedQuestions?: string;
    suggestedQuestionsTitle?: string;
    termsCheckboxText?: string;
    termsDescription?: string;
    termsTitle?: string;
    thinkModeAutoDescription?: string;
    thinkModeAutoText?: string;
    thinkModeFastDescription?: string;
    thinkModeFastText?: string;
    thinkModeThinkDescription?: string;
    thinkModeThinkText?: string;
    welcomeMessage?: string;
}


export const DEFAULT_OPTIONS: BielOptions = {
    bielButtonText: 'Ask AI',
    modalPosition: "bottom-right",
    buttonStyle: "dark",
    buttonPosition: 'bottom-right',
    enable: true,
};
