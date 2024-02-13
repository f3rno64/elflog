import { ForegroundColor, LogLevel } from '../enums'
import { type LoggerDefinition } from '../types'

export const debugLoggerDef: LoggerDefinition = {
  label: 'debug',
  badge: '',
  fgColor: ForegroundColor.Cyan,
  logLevel: LogLevel.Debug
}
