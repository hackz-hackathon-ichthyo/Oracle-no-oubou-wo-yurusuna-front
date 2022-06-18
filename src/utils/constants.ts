const MILLISECONDS = 1
const SECONDS = 1000 * MILLISECONDS
export const DEATH_API_URL =
  process.env.VITE_DEATH_API_URL || 'http://localhost:8080'
export const SOCKET_URL =
  process.env.VITE_SOCKET_URL || 'ws://localhost:8080/rooms/hoge'
export const DEFAULT_OPTIONS = {}

export const SOCKET_IO_PING_INTERVAL = 25 * SECONDS
export const SOCKET_IO_PATH = '/socket.io/?EIO=3&transport=websocket'
export const SOCKET_IO_PING_CODE = '2'
export const DEFAULT_RECONNECT_LIMIT = 20
export const DEFAULT_RECONNECT_INTERVAL_MS = 5000
export const UNPARSABLE_JSON_OBJECT = {}

export enum ReadyState {
  UNINSTANTIATED = -1,
  CONNECTING = 0,
  OPEN = 1,
  CLOSING = 2,
  CLOSED = 3,
}

const eventSourceSupported = () => {
  try {
    return 'EventSource' in globalThis
  } catch (e) {
    return false
  }
}

export const isEventSourceSupported = eventSourceSupported()
