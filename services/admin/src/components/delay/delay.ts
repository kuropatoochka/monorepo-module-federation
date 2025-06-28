export const delay = (callback: () => unknown, ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback())
    }, ms)
  })
}