import { ForegroundColor, LogLevel } from '../enums'
import { type LoggerDefinition } from '../types'

export const warnLoggerDef: LoggerDefinition = {
  label: 'warning',
  badge: '',
  fgColor: ForegroundColor.Yellow,
  logLevel: LogLevel.Warn
}
