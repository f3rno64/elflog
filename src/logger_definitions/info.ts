import { ForegroundColor, LogLevel } from '../enums'
import { type LoggerDefinition } from '../types'

export const infoLoggerDef: LoggerDefinition = {
  label: 'info',
  badge: '',
  fgColor: ForegroundColor.Cyan,
  logLevel: LogLevel.Info
}
