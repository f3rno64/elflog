import { ForegroundColor, LogLevel } from '../enums'
import { type LoggerDefinition } from '../types'

export const pendingLoggerDef: LoggerDefinition = {
  label: 'pending',
  badge: '',
  fgColor: ForegroundColor.Gray,
  logLevel: LogLevel.Info
}
