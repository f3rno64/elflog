import { Formatter, ForegroundColor, BackgroundColor, LogLevel } from './enums'

export interface LoggerDefinition {
  label: string
  badge?: string
  logLevel: LogLevel
  formatter?: Formatter
  fgColor: ForegroundColor
  bgColor?: BackgroundColor
}

export interface LoggerRenderConfig {
  renderDate: boolean
  renderTime: boolean
  renderScope: boolean
  renderBadge: boolean
  renderLabel: boolean
  underlineDate: boolean
  underlineTime: boolean
  renderFilename: boolean
  underlineScope: boolean
  underlineBadge: boolean
  underlineLabel: boolean
  uppercaseLabel: boolean
  uppercaseScope: boolean
  renderTimestamp: boolean
  underlineFilename: boolean
  underlineTimestamp: boolean
}

export interface LoggerConfig {
  secrets?: string[]
  logLevel: LogLevel
  renderConfig?: LoggerRenderConfig
  includeDefaultLoggerDefinitions?: boolean
  loggerDefinitions?: Record<string, LoggerDefinition>
}
