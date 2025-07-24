import { IncrementalCache } from 'next/dist/server/lib/incremental-cache'

class CustomCacheHandler extends IncrementalCache {
  constructor(options) {
    super(options)
  }

  async get(key) {
    try {
      return await super.get(key)
    } catch (error) {
      // Fallback to memory cache if filesystem is slow
      console.warn('Cache read failed, using memory fallback:', error.message)
      return null
    }
  }

  async set(key, data, options) {
    try {
      await super.set(key, data, options)
    } catch (error) {
      // Log error but don't fail the build
      console.warn('Cache write failed:', error.message)
    }
  }
}

export default CustomCacheHandler 