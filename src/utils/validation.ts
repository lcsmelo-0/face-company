export const hasEmptyProperties = (object: { [x: string]: any }) => {
  return Object.keys(object).reduce((accumulator, key) => {
    const value = object[key]
    if (typeof value !== 'string') {
      throw 'Attempt to validade non-string field'
    }
    return accumulator || value.trim() === ''
  }, false)
}
