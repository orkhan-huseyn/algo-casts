// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedStr = '';
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

module.exports = reverse;
