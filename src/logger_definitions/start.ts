import { ForegroundColor, LogLevel } from '../enums'
import { type LoggerDefinition } from '../types'

export const startLoggerDef: LoggerDefinition = {
  label: 'start',
  badge: '',
  fgColor: ForegroundColor.Green,
  logLevel: LogLevel.Info
}
