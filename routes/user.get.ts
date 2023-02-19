import { uniqBy } from 'lodash-es'
function delay(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, ms)
  })
}
export default eventHandler(async (event) => {
  const params = await getQuery(event)
  const result = await delay(3000)

  //   const test = [
  //     { name: 'ltg', age: 15 },
  //     { name: 'ltg', age: 15 },
  //     { name: 'lsm', age: 12 },
  //   ]
  //   console.log('isEqual', uniqBy(test, 'name'))
  console.log('🚀 ~ file: user.get.ts:3 ~ eventHandler ~ params', params.name)

  return { name: 'ltg', turbo: 15 }
})
