const myFn = cachedEventHandler(
  async () => {
    new Promise((resolve) => setTimeout(resolve, 1000))
    return `Response generated at ${new Date().toISOString()}`
  },
  {
    swr: true,
  }
)
