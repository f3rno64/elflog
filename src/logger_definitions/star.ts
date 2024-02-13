import { type LoggerDefinition } from '../types'
import { ForegroundColor, LogLevel } from '../enums'

export const starLoggerDef: LoggerDefinition = {
  label: 'star',
  badge: '⭐️',
  fgColor: ForegroundColor.Yellow,
  logLevel: LogLevel.Info
}
