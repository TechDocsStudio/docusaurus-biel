/** Widget settings passed to the CDN component. Keep these types self-contained. */
export interface BielOptions {
  enable?: boolean
  version?: string
  bielButtonText?: string
  aiIcon?: "bot" | "sparks" | "question-mark" | "biel"
  apiKey?: string
  apiUrl?: string
  assistantLabel?: string
  bielId?: string
  buttonPosition?: string
  buttonStyle?: string
  closeButtonText?: string
  collapseButtonText?: string
  connectButtonText?: string
  continueText?: string
  customFont?: boolean
  defaultThinkMode?: "auto" | "fast" | "think"
  disableAutofocus?: boolean
  disableInput?: boolean
  email?: string
  errorMessage403?: string
  errorMessage404?: string
  errorMessageDefault?: string
  expandButtonText?: string
  expandModal?: boolean
  footerText?: string
  headerTitle?: string
  hideAvatars?: boolean
  hideCloseButton?: boolean
  hideConnectButton?: boolean
  hideExpandButton?: boolean
  hideFeedback?: boolean
  hideIcon?: boolean
  hideInlineCitations?: boolean
  hideRefreshButton?: boolean
  hideSettingsButton?: boolean
  hideSources?: boolean
  hideTooltips?: boolean
  incompleteText?: string
  initialMessages?: { text: string; sender: "user" | "ai"; feedback?: 0 | 1 }[]
  inputPlaceholderText?: string
  keepConversation?: boolean
  loadingIndicator?: "spinner" | "dots"
  loadingText?: string
  mathjaxUrl?: string
  mcpClaudeCopiedDescription?: string
  mcpClaudeDescription?: string
  mcpClaudeText?: string
  mcpCodexCopiedDescription?: string
  mcpCodexDescription?: string
  mcpCodexText?: string
  mcpCopiedText?: string
  mcpCopilotDescription?: string
  mcpCopilotText?: string
  mcpCursorDescription?: string
  mcpCursorText?: string
  mcpServerUrl?: string
  mcpUrlCopiedDescription?: string
  mcpUrlDescription?: string
  mcpUrlText?: string
  mermaidTheme?: string
  messageTooLongText?: string
  metadata?: string
  modalPosition?: string
  project?: string
  refreshButtonText?: string
  renderDiagrams?: boolean
  renderMath?: boolean
  sendButtonText?: string
  settingsButtonText?: string
  showTermsModal?: boolean
  sourcesText?: string
  suggestedQuestions?: string
  suggestedQuestionsTitle?: string
  termsCheckboxText?: string
  termsDescription?: string
  termsTitle?: string
  thinkModeAutoDescription?: string
  thinkModeAutoText?: string
  thinkModeEnabled?: boolean
  thinkModeFastDescription?: string
  thinkModeFastText?: string
  thinkModeThinkDescription?: string
  thinkModeThinkText?: string
  welcomeMessage?: string
}

export const WIDGET_VERSION = "latest"

export const DEFAULT_OPTIONS: BielOptions = {
  bielButtonText: "Ask AI",
  modalPosition: "bottom-right",
  buttonStyle: "dark",
  buttonPosition: "bottom-right",
  enable: true,
}
