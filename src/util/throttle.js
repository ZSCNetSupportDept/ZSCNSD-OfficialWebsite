/**
 * Created by Clovin on 25/12/2017.
 */

export function throttle (fn, delay, mustRunDelay) {
  let timer = null
  let t_start
  return function () {
    let context = this, args = arguments, t_curr = +new Date()
    clearTimeout(timer)
    if (!t_start) {
      t_start = t_curr
    }
    if (t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args)
      t_start = t_curr
    }
    else {
      timer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    }
  }
}