import type { Components } from "biel-search"

type Widget = Components.BielButton
type WidgetDataKeys = {
  [Key in keyof Widget]-?: Widget[Key] extends (...args: never[]) => unknown
    ? never
    : Key
}[keyof Widget]

export type BielOptions = Partial<Pick<Widget, WidgetDataKeys>> & {
  enable?: boolean
  version?: string
  bielButtonText?: string
}

export const WIDGET_VERSION = "latest"

export const DEFAULT_OPTIONS: BielOptions = {
  bielButtonText: "Ask AI",
  modalPosition: "bottom-right",
  buttonStyle: "dark",
  buttonPosition: "bottom-right",
  enable: true,
}
