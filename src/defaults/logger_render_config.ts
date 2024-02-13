import { type LoggerRenderConfig } from '../types'

export const DEFAULT_LOGGER_RENDER_CONFIG: LoggerRenderConfig = {
  renderDate: true,
  renderTime: true,
  renderScope: true,
  renderBadge: true,
  renderLabel: true,
  underlineDate: false,
  underlineTime: false,
  renderFilename: true,
  underlineScope: true,
  underlineBadge: false,
  underlineLabel: true,
  uppercaseLabel: false,
  uppercaseScope: false,
  renderTimestamp: false,
  underlineFilename: true,
  underlineTimestamp: false
}
