const inputValidPattern = {
  mail: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  hasNumber: /\d/,
  hasSmallLetter: /[a-z]+/,
  hasBigLetter: /[A-Z]+/,
  hasSpecialCharacter: /[*@!#%&()^~{}]+/,
};

export { inputValidPattern };
