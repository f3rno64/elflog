import { ForegroundColor, LogLevel } from '../enums'
import { type LoggerDefinition } from '../types'

export const errorLoggerDef: LoggerDefinition = {
  label: 'error',
  badge: '',
  fgColor: ForegroundColor.Red,
  logLevel: LogLevel.Error
}
