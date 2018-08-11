var LetterCount = function(letters) {
  this.storage = {};
  this.size = 0;
  this.addLettersToCount(letters);
  this.backup = {};
}

LetterCount.prototype.addLettersToCount = function(letters) {
  letters.forEach((letter) => {
    this.size++;
    if (this.storage.hasOwnProperty(letter)) {
      this.storage[letter]++;
    } else {
      this.storage[letter] = 1;
    }
  });
}