// Check if E-mail is Valid or not
function isScramble(str1, str2) {
  if (str1.length < str2.length) return false

  if (str1.length === 1) return str1 === str2

  if (str1 === str2) return true

  const string1CharsArr = str1.split('')
  const string2CharsArr = str2.split('')

  string1CharsArr.sort()
  string2CharsArr.sort()

  const charMap = {}

  string1CharsArr.forEach(char => {
    if (char in charMap) {
      charMap[char] += 1
    } else {
      charMap[char] = 1
    }
  })

  string2CharsArr.forEach(char => {
    if (char in charMap) {
      charMap[char] -= 1
    } else {
      charMap[char] = -1
    }
  })

  return Object.values(charMap).indexOf(-1) === -1
}

module.exports = isScramble
