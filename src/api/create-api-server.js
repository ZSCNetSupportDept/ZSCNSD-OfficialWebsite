/**
 * Created by Clovin on 20/12/2017.
 */

const isDev = process.env.NODE_ENV !== 'production'

export function getDomain () {
  return isDev ? `http://localhost:9594` : `http://zsxyww.com`
}