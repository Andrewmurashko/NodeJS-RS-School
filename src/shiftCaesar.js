const shiftCaesar = (text, shift) => {
  if (shift < 0) {
    return shiftCaesar(text, shift + 26);
  }
  let resault = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    if (letter.match(/[a-z]/i)) {
      const code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        letter = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } 
    }
    resault += letter;
  }
  return resault;
};

module.exports = shiftCaesar;
