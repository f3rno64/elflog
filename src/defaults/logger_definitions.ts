import { LoggerDefinition } from '../types'
import {
  logLoggerDef,
  warnLoggerDef,
  infoLoggerDef,
  starLoggerDef,
  debugLoggerDef,
  errorLoggerDef,
  fatalLoggerDef,
  startLoggerDef,
  pendingLoggerDef,
  successLoggerDef,
  completeLoggerDef
} from '../logger_definitions'

export const DEFAULT_LOGGER_DEFINITIONS: Record<string, LoggerDefinition> = {
  log: logLoggerDef,
  warn: warnLoggerDef,
  info: infoLoggerDef,
  star: starLoggerDef,
  debug: debugLoggerDef,
  error: errorLoggerDef,
  fatal: fatalLoggerDef,
  start: startLoggerDef,
  pending: pendingLoggerDef,
  success: successLoggerDef,
  complete: completeLoggerDef
}
