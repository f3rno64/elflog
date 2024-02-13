import { ForegroundColor, LogLevel } from '../enums'
import { type LoggerDefinition } from '../types'

export const completeLoggerDef: LoggerDefinition = {
  label: 'complete',
  badge: '',
  fgColor: ForegroundColor.Green,
  logLevel: LogLevel.Info
}
