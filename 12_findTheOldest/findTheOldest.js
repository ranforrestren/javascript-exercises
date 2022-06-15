const findTheOldest = function(people) {
  const oldest = people.sort((a, b) => {
    aAge = ('yearOfDeath' in a ? a['yearOfDeath'] - a['yearOfBirth'] : 2022 - a['yearOfBirth']);
    bAge = ('yearOfDeath' in b ? b['yearOfDeath'] - b['yearOfBirth'] : 2022 - b['yearOfBirth']);
    return aAge > bAge ? -1 : 1;
  })
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
