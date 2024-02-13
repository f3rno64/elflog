import { LogLevel } from '../enums'
import { type LoggerConfig } from '../types'
import { DEFAULT_LOGGER_DEFINITIONS } from './logger_definitions'
import { DEFAULT_LOGGER_RENDER_CONFIG } from './logger_render_config'

export const DEFAULT_LOGGER_CONFIG: LoggerConfig = {
  loggerDefinitions: DEFAULT_LOGGER_DEFINITIONS,
  renderConfig: DEFAULT_LOGGER_RENDER_CONFIG,
  includeDefaultLoggerDefinitions: true,
  logLevel: LogLevel.Debug
}
