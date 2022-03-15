const removeFromArray = function(passedArray) {
  for (let i = 0; i < passedArray.length; i++)
  {
    for (let it = 1; it < arguments.length; it++)
    {
      if (passedArray[i] === arguments[it])
      {
        passedArray.splice(i, 1);
        i--;
      }
    }
  }
  return passedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
