const isScramble = require('./utils')

test('check if "rekqodlw" and "world" is scramble', () => {
  expect(isScramble('rekqodlw', 'world')).toBe(true)
})

test('check if "cedewaraaossoqqyt" and "codewars" is scramble', () => {
  expect(isScramble('cedewaraaossoqqyt', 'codewars')).toBe(true)
})

test('check if "katas" and "steak" is scramble', () => {
  expect(isScramble('katas', 'steak')).toBe(false)
})

test('check if "foo" and "fof" is scramble', () => {
  expect(isScramble('foo', 'fof')).toBe(false)
})
