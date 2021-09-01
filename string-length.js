const stringLength = (str) => {
  if (str.length >= 1 && str.length <= 10) {
    return str.length;
  } else {
    throw new Error(
      'The string passed doesn\'t not met the conditions which are string should be at least 1 character long and not longer than 10 characters.'
    );
  }
};  

module.exports = stringLength;
