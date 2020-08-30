// Write a function check, which, given a number, returns whether it is valid or not (according to the Luhn Algorithm).
const sumArray = (array) => {
  return array.reduce((total, elem) => total + Number(elem), 0);
};

const check = (num) => {
  const numArr = String(num).split('').reverse().map((elem, index) => {
    if (index % 2 !== 0) {
      const double = elem * 2;
      return double < 10 ? double : sumArray(String(double).split(''));
    }
    return Number(elem);
  });
  const sum = sumArray(numArr);
  if (sum % 2 === 0) {
    return true;
  }
  return false;
};

module.exports = { check };