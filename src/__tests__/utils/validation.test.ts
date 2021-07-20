import { hasEmptyProperties } from 'app-utils'

describe('Has empty properties test', () => {
  it('Should validate if the method returns false on an object without empty key', () => {
    let name = 'John'
    let lastname = 'Due'

    const obj = {
      name: name,
      lastName: lastname,
    }
    expect(hasEmptyProperties(obj)).toBe(false)
  })
})
