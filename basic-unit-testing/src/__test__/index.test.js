const randomStrings = require('../index')


describe('randomStrings Functionalities', () => {
    test('Test functionality', () => {
        expect(typeof(randomStrings())).toBe('string')
    })
    test('Probe there is not a city', () => {
        expect(randomStrings()).not.toMatch('Cordoba')
    })
})