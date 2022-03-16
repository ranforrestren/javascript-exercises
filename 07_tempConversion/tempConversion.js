const ftoc = function(inputTemp) {
  let outputTemp = (inputTemp - 32) * 5/9;
  outputTemp = Math.round(outputTemp * 10) / 10;
  return outputTemp;
};

const ctof = function(inputTemp) {
  let outputTemp = (inputTemp * 9/5) + 32;
  outputTemp = Math.round(outputTemp * 10) / 10;
  return outputTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
