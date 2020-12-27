// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let counter = {};
  let maxCount = 0;
  let maxChar = '';
  for (const letter of str) {
    !counter[letter] ? counter[letter] = 1 :  counter[letter] +=1;
  }

  for (const char in counter) {
    if (counter[char] > (maxCount) ) {
      maxChar = char;
      maxCount = counter[char]
    }
  }
  return maxChar;
}

module.exports = maxChar;
