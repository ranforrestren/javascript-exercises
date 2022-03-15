const reverseString = function(inputString) {
let reversedString = "";
for (i = 1; i < inputString.length + 1; i++)
{
  reversedString += inputString[inputString.length-i];
}
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
