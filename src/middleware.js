import { CALL_FALCOR_METHOD } from './actions'

export default function falcorMiddleware(falcor) {
  return () => next => action => {
    if (action.type !== CALL_FALCOR_METHOD) {
      return next(action)
    }

    const { payload: { method, args } } = action
    switch (method) {
      case 'call':
      case 'get':
      case 'getValue':
      case 'set':
      case 'setValue':
        return falcor[method](...args)
          .then(res => {
            next({
              type: `${method.toUpperCase()}_SUCCESS`,
              res,
            })
            return res
          })
          .catch(error => {
            next({
              type: `${method.toUpperCase()}_FAILURE`,
              error,
            })
            return error
          })
      default:
        return falcor[method](...args)
    }
  }
}
