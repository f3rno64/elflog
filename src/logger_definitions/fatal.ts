import { ForegroundColor, LogLevel } from '../enums'
import { type LoggerDefinition } from '../types'

export const fatalLoggerDef: LoggerDefinition = {
  label: 'fatal',
  badge: '',
  fgColor: ForegroundColor.Red,
  logLevel: LogLevel.Error
}
