export const CALL_FALCOR_METHOD = '@@falcor/CALL_FALCOR_METHOD'

function callFalorMethod(method) {
  return (...args) => ({
    type: CALL_FALCOR_METHOD,
    payload: {method, args},
  })
}

export const call = callFalorMethod('call')
export const get = callFalorMethod('get')
export const getValue = callFalorMethod('getValue')
export const invalidate = callFalorMethod('invalidate')
export const set = callFalorMethod('set')
export const setValue = callFalorMethod('setValue')

export const falcorActions = {
  call,
  get,
  getValue,
  invalidate,
  set,
  setValue,
}
