const repeatString = function(inputPhrase, repeatTimes) {
  let outputPhrase = "";
  if (repeatTimes < 0)
  {
    return 'ERROR';
  }
  for (i = 0; i < repeatTimes; i++) 
  {
    outputPhrase += `${inputPhrase}`;
  }
  return outputPhrase;
};

// Do not edit below this line
module.exports = repeatString;
