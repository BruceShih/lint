// @ts-check
import JITI from 'jiti'

const jiti = JITI(import.meta.url)
/**
 * @type {import('./src').default}
 */
const bruceshih = jiti('./src').default

export default bruceshih({
  ignores: [
    'fixtures',
    '_fixtures'
  ]
})
