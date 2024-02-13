import path from 'path'
import pc from 'picocolors'
import _last from 'lodash/last'
import _trim from 'lodash/trim'
import _keys from 'lodash/keys'
import _split from 'lodash/split'
import _isNil from 'lodash/isNil'
import _values from 'lodash/values'
import _isEmpty from 'lodash/isEmpty'
import _compact from 'lodash/compact'
import _forEach from 'lodash/forEach'
import _isString from 'lodash/isString'
import _isUndefined from 'lodash/isUndefined'

import { LogLevel } from './enums'
import { type LoggerDefinition, type LoggerConfig } from './types'
import { DEFAULT_LOGGER_DEFINITIONS } from './defaults/logger_definitions'

const FALLBACK_LOG_LEVEL = LogLevel.Debug
const { LOG_LEVEL: ENV_LOG_LEVEL } = process.env

const RESOLVED_LOG_LEVEL =
  !_isUndefined(ENV_LOG_LEVEL) && _isString(ENV_LOG_LEVEL)
    ? ENV_LOG_LEVEL
    : FALLBACK_LOG_LEVEL

const LOG_LEVEL = LogLevel[RESOLVED_LOG_LEVEL as keyof typeof LogLevel]
const LOG_LEVELS = _values(LogLevel).join(', ')

if (_isUndefined(LOG_LEVEL)) {
  throw new Error(
    `Invalid log level: ${RESOLVED_LOG_LEVEL}. Valid values are ${LOG_LEVELS}`
  )
}

// eslint-disable-next-line no-console
console.log(`Resolved log level ${LOG_LEVEL}`)

const LogLevelValues = {
  [LogLevel.Debug]: 0,
  [LogLevel.Info]: 1,
  [LogLevel.Timer]: 2,
  [LogLevel.TimeEnd]: 3,
  [LogLevel.Warn]: 4,
  [LogLevel.Error]: 5,
  [LogLevel.Fatal]: 6
}

const getCallerFileName = (): string | null => {
  const err = new Error()
  const { stack } = err
  const stackLines = _split(stack, '\n')
  const callerLine = stackLines[2]
  const match =
    /\((.*):\d+:\d+\)$/.exec(callerLine) || /at (.*):\d+:\d+$/.exec(callerLine)

  const fullFilePath = match ? match[1] : null

  return _isNil(fullFilePath)
    ? null
    : _last(_split(fullFilePath, path.sep)) ?? null
}

type LoggerFunction = (msgLogLevel: LogLevel, ...messages: string[]) => void
type Logger = Record<string, LoggerFunction>

const genLoggerFromDefinition = (def: LoggerDefinition): LoggerFunction => {
  const { label, badge, logLevel, fgColor, bgColor } = def
  const logLevelValue = LogLevelValues[`${logLevel}`]

  return (msgLogLevel: LogLevel, ...messages: string[]): void => {
    const msgLogLevelValue = LogLevelValues[`${msgLogLevel}`]

    if (msgLogLevelValue < logLevelValue) {
      return
    }

    const colorFunc = (input: string): string => {
      return !_isUndefined(bgColor) && !_isUndefined(fgColor)
        ? pc[`${bgColor}`](pc[`${fgColor}`](input))
        : _isUndefined(fgColor)
          ? input
          : pc[`${fgColor}`](input)
    }

    // TODO: Support format strings
    const message = messages.join(' ')
    const filename = getCallerFileName()
    const output = _trim(
      _compact([
        _isEmpty(filename) ? false : _trim(colorFunc(`[${filename}]`)),
        _isEmpty(label) ? false : _trim(colorFunc(label)),
        _isEmpty(badge) ? false : _trim(colorFunc(`${badge}`)),
        _trim(colorFunc(message))
      ]).join(' ')
    )

    // const output = _trim(`[${filename ?? ''}] ${label} (${badge}): ${message}`)

    // eslint-disable-next-line no-console
    console.log(output)
  }
}

const getLogger = (config: LoggerConfig): Logger => {
  const { loggerDefinitions, includeDefaultLoggerDefinitions } = config
  const finalLoggerDefinitions = { ...loggerDefinitions }

  if (includeDefaultLoggerDefinitions) {
    _forEach(_keys(DEFAULT_LOGGER_DEFINITIONS), (key: string): void => {
      const defaultLoggerDefinition = DEFAULT_LOGGER_DEFINITIONS[`${key}`]
      const existingLoggerDefinition = finalLoggerDefinitions[`${key}`]

      if (!_isUndefined(existingLoggerDefinition)) {
        throw new Error(`Duplicate logger definition: ${key}`)
      } else {
        finalLoggerDefinitions[`${key}`] = defaultLoggerDefinition
      }
    })
  }

  const logger: Logger = {}

  _forEach(_keys(finalLoggerDefinitions), (key: string): void => {
    logger[`${key}`] = genLoggerFromDefinition(finalLoggerDefinitions[`${key}`])
  })

  return logger
}

const l = getLogger({
  logLevel: LogLevel.Debug,
  includeDefaultLoggerDefinitions: true
})

_forEach(_keys(l), (key: string): void => {
  l[`${key}`](LogLevel.Fatal, 'Hello world!')
})
