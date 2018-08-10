var ScrabbleSolver = function(letters) {
  var letterCount = new LetterCount(letters);
  console.log(letterCount);
}

ScrabbleSolver.prototype.isValidWord = function(word) {
  return dictionary[word] === 1;
}

ScrabbleSolver.prototype.getValidCombinations = function(letterCount) {
  var combinations = [];
  var amountOfLetters = Object.keys(letterCount).length;

  var getCombination = function(letterCount, wordLength = amountOfLetters) {
    
  }
}

var solver = new ScrabbleSolver(['A', 'B', 'C']);