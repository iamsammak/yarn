// Day 1
// console.log("Day 1");

// Write a method, digital_root(num). It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.

// https://en.wikipedia.org/wiki/Digital_root#Congruence_formula

function digitalRoot(num) {
  if (num === 0) {
    return 0;
  }
  return num === 9 ? 9 : num % 9;
}

// function root(num){
//     var total = 0;
//     if(num.toString().length == 1){
//         var iNum = parseInt(num);
//         return iNum;
//     }else{
//         num.toString().split("").forEach( function(value){
//             var iValue = parseInt(value);
//             return total += iValue;
//         });
//         return root(total);
//     }
// }

console.log(digitalRoot(0));
console.log(digitalRoot(9));
console.log(digitalRoot(82));
console.log(digitalRoot(77));

// Write a function that takes a message and an increment amount and
// outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation. Preserve spaces.

// writing this with the assumption that there are no numbers
function genCharArray(charA, charZ) {
  let letters = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; i++) {
    letters.push(String.fromCharCode(i));
  }
  return letters;
}

function caesarCipher(string, shift) {
  let alphabet = genCharArray("a", "z");
  let encodedStr = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      encodedStr += string[i];
    } else {
      let oldIndex = alphabet.indexOf(string[i]);
      let newIndex = (oldIndex + shift) % alphabet.length;

      encodedStr += alphabet[newIndex];
    }
  }
  return encodedStr;
}

// console.log(caesarCipher("abc def", 1));
// console.log(caesarCipher("abc def", 5));


// Day 2
console.log("Day 2");

// Write a function, fibs(num) which returns the first n elements from the fibonnacci sequence, given n.
// Solve it both iteratively and recursively.

function fibsIterative(num) {
  if (num === 0) {
    return [];
  } else if (num === 1) {
    return [0];
  }

  let fibs = [0, 1];
  for (let i = fibs.length; i < num; i++) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }
  return fibs;
}
// console.log(fibsIterative(5));
// console.log(fibsIterative(2));
// console.log(fibsIterative(0));

function fibsRecursive(num) {
  if (num === 0) {
    return [];
  } else if (num === 1 ) {
    return [0];
  } else if (num === 2 ) {
    return [0, 1];
  }
  let prevFibs = fibsRecursive(num - 1);
  prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);

  return prevFibs;
}
// console.log(fibsRecursive(7));
// console.log(fibsRecursive(2));
// console.log(fibsRecursive(0));


// Write a JavaScript function that takes a string
// and returns true if it's a palindrome, false if it's not. Use JavaScript.
// This solution takes less time and memory than rebuilding the string backward
// and comparing the two.

function isPalindrome(string) {
  let length = string.length + 1;

  for (let i = 0; i < length/2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Write a method that takes a string as input.
// It should return true if the input is a valid IPv4 address
// (ie. anything between 0.0.0.0 and 255.255.255.255 is valid).

// .match for regex

function validIP(string) {
  if (!string.match(/^\d+(\.\d+){3}$/)) {
    return false;
  }
  let nums = string.split(".").map(el => parseInt(el));
  return nums.every(num => num >= 0 && num <= 255);
}

// console.log(validIP("255.255.255.255"));
// console.log(validIP("25.2.2.2"));
