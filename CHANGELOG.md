# Changelog

All notable changes to this project will be documented in this file.

## [1.0.12] - 2026-02-17

### Added

- Added MCP options: `mcpServerUrl`, `mcpUrlText`, `mcpUrlDescription`, `mcpClaudeText`, `mcpClaudeDescription`, `mcpCopilotText`, `mcpCopilotDescription`, `mcpCursorText`, `mcpCursorDescription`, `mcpCopiedText`, `mcpUrlCopiedDescription`, `mcpClaudeCopiedDescription`.
- Added think mode text options: `thinkModeAutoText`, `thinkModeAutoDescription`, `thinkModeFastText`, `thinkModeFastDescription`, `thinkModeThinkText`, `thinkModeThinkDescription`.
- Added missing options: `hideSettingsButton`, `hideConnectButton`, `keepConversation`, `settingsButtonText`, `connectButtonText`.

### Removed

- Removed unused options: `hideThinkModeButton`, `thinkModeButtonText`.

## [1.0.11] - 2026-02-04

## Added

- Added metadata option.

## [1.0.10] - 2025-11-11

### Added

- Added think mode options.
- Added header tooltip options.


## [1.0.9] - 2025-09-15

### Added

- Added `hideSources` option.

## [1.0.8] - 2025-08-01

### Added

- Added `aiIcon` parameter to BielOptions interface for specifying AI icon type.
- Added `hideAvatars` parameter to BielOptions interface for hiding avatars.

### Fixed

- Fixed type inconsistencies: `customFont` is now correctly typed as boolean, `disableInput` is now correctly typed as boolean.

## [1.0.7] - 2025-06-22

### Added

- Added `apiKey` parameter to BielOptions interface.

## [1.0.6] - 2025-05-24

### Added

- Added missing props for biel-button: `hideIcon`.
- Added missing props for biel-bot: `disableInput`, `expandModal`, `hideCloseButton`, `hideExpandButton`, `hideRefreshButton`, `hideFeedback`, `modalPosition`, `showTermsModal`
- Reorganized and documented configuration options with comments.

## [1.0.5] - 2025-05-01

### Added

- Added new configuration options: `email`, `errorMessage403`, `errorMessage404`, `errorMessageDefault`, `expandModal`, `footerText`, `hideExpandButton`, `hideFeedback`, `inputPlaceholderText`, `sendButtonText`, `showTermsModal`, `sourcesText`, `suggestedQuestions`, `suggestedQuestionsTitle`, `termsCheckboxText`, `termsDescription`, `termsTitle`, `welcomeMessage`.

### Changed

- Reorganized BielOptions interface for better structure.

## [1.0.4] - 2024-11-19

### Removed

- Removed search functionality and SearchBar component.
- Removed search options from configuration.
- Cleaned up unused imports and theme path configuration.

### Changed

- Simplified plugin structure.

## [1.0.3] - 2024-11-15

### Added

- Added `headerTitle` option to search configuration.

## [1.0.2] - 2024-11-15

### Added

- Added search functionality with BielSearch component.
- Added search options: `enable`, `searchButtonText`, `buttonStyle`, `modalPosition`, `hideIcon`, `hideCtrlK`, `searchPlaceholder`, `hideFilters`.
- Added custom SearchBar theme component.
- Added utility functions for camelCase to kebab-case conversion.

### Changed

- Enhanced plugin configuration to support search features.

## [1.0.1] - 2024-09-07

### Added

- Initial release.
