
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(alphabet)

function encode(word) {
    var name = word;
    var nameSplit = word.split('');  //splits the word into an array of letters
    var cipherArray = []; //empty array

  for (i = 0; i < nameSplit.length; i++) {
    var letter = alphabet.indexOf(nameSplit[i]); //you find the index number of the letter in each array item
    var cipher = alphabet[25- letter];  //you find the reverse, there will always be 25 indexes in the alphabet array
    cipherArray.push(cipher); //pushes into the empty array
}

  console.log(cipherArray.join('')); //join all the letters in the new array into a word
  alert((cipherArray.join('')));
};

function decode(word) {
    var name = word;
    var nameSplit = word.split('');
    var cipherArray = [];

  for (i = 0; i < nameSplit.length; i++) {
    var letter = alphabet.indexOf(nameSplit[i]);
    var cipher = alphabet[25- letter];
    cipherArray.push(cipher);
} //decode runs the same way due to the formula

  console.log(cipherArray.join(''));
  alert((cipherArray.join('')));
}

var userInput = prompt('What word do you want to encode?')
var userWord = userInput.toLowerCase();

var userDecodeInput = prompt('What word do you want to decode?')
var userWordDecode = userDecodeInput.toLowerCase();

encode(userWord);
decode(userWordDecode);



//https://github.com/tartufu/atbash_cipher
//var letter = alphabet.indexOf('c') // find the index number in the array
//var cipher = alphabet[25 - letter]; //formula for folding. 25 - 3 = index 22 for eg.

/*var name = 'hello';
var nameSplit = name.split('');
var cipherArray = [];

for (i = 0; i < nameSplit.length; i++) {
    var letterTest = alphabet.indexOf(nameSplit[i]);
    var cipherTest = alphabet[25- letterTest];
    cipherArray.push(cipherTest);
}

console.log(letter);
console.log(cipher);
console.log(nameSplit[0]);
console.log(letterTest);
console.log(cipherArray.join('')); */