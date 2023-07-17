function decimal_to_binary(decimal) {
    if (decimal === 0) {
      return '0';
    }
  
    let binary = '';
    let num = decimal;
  
    while (num > 0) {
      binary = (num % 2) + binary;
      num = Math.floor(num / 2);
    }
  
    return binary;
}
function decimal_to_hexadecimal(decimal) {
    if (decimal === 0) {
      return '0';
    }
  
    let hexadecimal = '';
    let num = decimal;
  
    while (num > 0) {
      const remainder = num % 16;
      hexadecimal = getHexDigit(remainder) + hexadecimal;
      num = Math.floor(num / 16);
    }
    return hexadecimal;
}
function getHexDigit(remainder) {
    if (remainder < 10) {
      return String(remainder);
    } else {
      // A = 10, B = 11, C = 12, ..., F = 15
      const alphabet = 'ABCDEF';
      const index = remainder - 10;
      return alphabet.charAt(index);
  }
}  
function binary_to_decimal(binary) {
    let decimal = 0;
    let num = binary;
    let power = 0;
  
    while (num > 0) {
      const lastDigit = num % 10;
      decimal = decimal + lastDigit * 2 ** power;
      num = Math.floor(num / 10);
      power++;
    }
 
    return decimal;
}
function hexadecimal_to_decimal(hexadecimal) {
    const decimal = parseInt(hexadecimal, 16);
    return decimal;
  }
  
function binary_to_hexadecimal(binary) {
    const decimal = binary_to_decimal(binary);
    const hexadecimal = decimal_to_hexadecimal(decimal);
    return hexadecimal;
}
function hexadecimal_to_binary(hexadecimal) {
    const decimal = hexadecimal_to_decimal(hexadecimal);
    const binary = decimal_to_binary(decimal);
    return binary;
}
const number = 'F';
const temp = hexadecimal_to_binary(number);
console.log(temp);
