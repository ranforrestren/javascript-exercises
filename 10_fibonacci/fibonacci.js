const fibonacci = function(number) {
  if (number < 0) { return "OOPS"; }

  let fib = [0, 1];
  
  for (i = 2; i <= number; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib[number];
};

// Do not edit below this line
module.exports = fibonacci;
