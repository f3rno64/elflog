import { ForegroundColor, LogLevel } from '../enums'
import { type LoggerDefinition } from '../types'

export const successLoggerDef: LoggerDefinition = {
  label: 'success',
  badge: '',
  fgColor: ForegroundColor.Green,
  logLevel: LogLevel.Info
}
