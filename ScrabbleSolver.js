var ScrabbleSolver = function(letters) {
  var letterCount = new LetterCount(letters);
  console.log(this.getValidCombinations(letters, letterCount));
}

ScrabbleSolver.prototype.isValidWord = function(word) {
  return dictionary[word] === 1;
}

ScrabbleSolver.prototype.getValidCombinations = function(letters, _lettercount) {
  var combinations = [];
  var letterCount = _lettercount;

  var getCombination = function(word = [], wordLength = 0) {
    combinations.push(word);
    
    if (wordLength === letters.length) {
      return;
    }

    letters.forEach(function (letter) {
      if (letterCount.storage[letter] > 0) {
        letterCount.storage[letter]--;
        getCombination(word.concat(letter), wordLength+1);
      }
    });
  }

  getCombination();

  return combinations;
}

var solver = new ScrabbleSolver(['A', 'A', 'B', 'C']);