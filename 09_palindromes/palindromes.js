const palindromes = function (a) {
  a = a.toLowerCase().replace(/[^A-Za-z0-9]/g,'');
  let length = a.length;
  for (let i = 0; i < length/2; i++) {
    if (a.charAt(i) != a.charAt(length - i - 1)) {
      return false;
    }
  };
  return true;
};

// Do not edit below this line
module.exports = palindromes;
