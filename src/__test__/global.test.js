const txt = 'Hello World'
const fruits = ['Apple', 'Watermelon', 'Banana']
const reverseString = (str, cb) => cb(str.split('').reverse().join(''))
const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    })
}


test('Must have a text', () => {
    expect(txt).toMatch(/World/)
})

test('It have a banana', () => {
    expect(fruits).toContain('Banana')
})

test('Greater than', () => {
    expect(10).toBeGreaterThan(9.9)
})

test('True', () => {
    expect(true).toBeTruthy()
})

test('Callback', () => {
    reverseString('Hola', str => {
        expect(str).toBe('aloH')
    })
})

test('Promise', () => {
    return reverseString2('Hola')
        .then(str => {
            expect(str).toBe('aloH')
        })
        .catch(error => {
            expect(error).toStrictEqual(Error('Error'))
        })
})

test('Async, Await', async () => {
    const str = await reverseString2('Hola')
    expect(str).toBe('aloH')
})

// afterEach(() => console.log('After each test'))
// afterAll(() => console.log('After all tests'))
// beforeEach(() => console.log('Before each test'))
// beforeAll(() => console.log('Before all tests'))