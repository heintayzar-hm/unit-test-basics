const stringLength = (string) => {
    if (string.length < 1 || string.length > 10) throw new Error('The string should not be longer than 10 and smaller that 1');
    return string.length;
}

const reverseString = (string) => {
    return string.split('').reverse().join('');
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
 module.exports = {stringLength,reverseString,capitalize}