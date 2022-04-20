/// <reference lib="webworker" />

import { PrecacheEntry } from 'workbox-precaching'

declare const self: ServiceWorkerGlobalScope

export const isLocalhost = Boolean(
  self.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    self.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    self.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)

export function toURL(entry: string | PrecacheEntry): string {
  return typeof entry === 'string' ? entry : entry.url
}
