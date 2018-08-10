var LetterCount = function(letters) {
  this.storage = {};
  this.addLettersToCount(letters);
}

LetterCount.prototype.addLettersToCount = function(letters) {
  letters.forEach(function (letter) {
    if (this.storage.hasOwnProperty(letter)) {
      this.storage[letter]++;
    } else {
      this.storage[letter] = 1;
    }
  });
}