module.exports = function toReadable (number) {
  let units = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: "four",
    5: 'five',
    6: 'six',
    7: "seven",
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
    let tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };
    let hundreds = {
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: "four hundred",
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred',
    }
    
const num = number.toString()
let result = ''

if (number < 20) { result = units[number] }
if (num.length === 2 && number >= 20) {
    if (number % 10 === 0) {
        result = tens[num[0]];
    } else {
        result = tens[num[0]] + ' ' + units[num[1]];
        }
}

if (num.length === 3) {
    if (number % 100 === 0) { result = hundreds[num[0]]}
    if (number % 10 === 0 && number % 100 !== 0) { result = hundreds[num[0]] + ' ' + tens[num[1]]}
    if (num[1] == '1') { result = hundreds[num[0]] + ' ' + units[Number((num[1] + num[2]))]}
    if (num[1] == '0' && number % 10 !== 0) { result = hundreds[num[0]] + ' ' + units[num[2]]}
    if (number % 100 !== 0 && number % 10 !== 0 && num[1] !== '1' && num[1] !== '0') {
    result = hundreds[num[0]] + ' ' + tens[num[1]] + ' ' + units[num[2]]
    }
}

return result
}
