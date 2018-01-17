/**
 * Created by Clovin on 20/12/2017.
 */

const isDev = process.env.NODE_ENV !== 'production'

export function getDomain () {
  return isDev ? `https://localhost:443` : `https://zsxyww.com`
}