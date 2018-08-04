var ScrabbleSolver = function(letters) {}

ScrabbleSolver.prototype.isValidWord = function(word) {
  return dictionary[word] === 1;
}

var solver = new ScrabbleSolver();