// LETTER COUNT
class LetterCount {
  constructor(letters) {
    this.size = 0;
    this.storage = {};
    this.backup = {};
    this.addLettersToCount(letters);
  }

  addLettersToCount(letters) {
    letters.forEach((letter) => {
      this.size++;
      if (this.storage.hasOwnProperty(letter)) {
        this.storage[letter]++;
      } else {
        this.storage[letter] = 1;
      }
    });
  }
}

// LETTER COUNT
class ScrabbleSolver {
  constructor(letters) {
    this.letters = letters;
    this.letterCount = new LetterCount(letters);
    console.log(JSON.stringify(this.getValidCombinations(letters, this.letterCount)));
    //console.log(this.isValidWord('hello'));
  }

  isValidWord(word) {
    return dictionary[word] === 1;
  }

  getValidCombinations(_letters, _letterCount) {
    const combinations = [];

    const getCombinations = (_combo = []) => {
      let word = _combo.join('');

      if (this.isValidWord(word)) {
        combinations.push(word);
      }

      _letters.forEach((letter) => {
        if (_letterCount.storage[letter] > 0) {
          _letterCount.storage[letter] --;
          getCombinations(_combo.concat(letter));
          _letterCount.storage[letter] ++;
        }
      });
    }
    
    getCombinations([]);
    return combinations;
  }
}

var solver = new ScrabbleSolver(['t', 'a', 'p']);