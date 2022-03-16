const sumAll = function(firstNumber, secondNumber) {
  let counter = 0;
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') 
  {
    return 'ERROR';
  } 
  else if (Math.sign(firstNumber) === -1 || Math.sign(secondNumber) === -1)
  {
    return 'ERROR';
  }
  if (firstNumber > secondNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }
  for (let i = firstNumber; i < secondNumber + 1; i++) {
    counter += i;
  }
  return counter;
};

// Do not edit below this line
module.exports = sumAll;
