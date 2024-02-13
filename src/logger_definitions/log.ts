import { ForegroundColor, LogLevel } from '../enums'
import { type LoggerDefinition } from '../types'

export const logLoggerDef: LoggerDefinition = {
  label: 'log',
  badge: '',
  fgColor: ForegroundColor.Cyan,
  logLevel: LogLevel.Info
}
