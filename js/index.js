// Iteration 1: Names and Input
let hacker1 = "Mauricio";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Danilo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function whoIsLonger(params) {
  if (hacker1.length > hacker2.length) {
    return console.log(
      `The ${hacker1} has the longest name, it has ${hacker1.length} characters.`
    );
  } else if (hacker1.length < hacker2.length) {
    return console.log(
      `The ${hacker2} has the longest name, it has ${hacker2.length} characters.`
    );
  } else {
    return console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  }
}
whoIsLonger(hacker1, hacker2);

// Iteration 3: Loops
const splittedHacker1 = hacker1.toUpperCase().split("").join(" ");
console.log(splittedHacker1);

const revertedHacker2 = hacker2.split("").reverse().join("");
console.log(revertedHacker2);

function lexiOrder(params) {
  if (hacker1[0] < hacker2[0]) {
    return console.log(`The driver's name goes first.`);
  } else if (hacker1[0] > hacker2[0]) {
    return console.log(`Yo, the navigator goes first definitely.`);
  } else {
    return console.log(`What?! You both have the same name?`);
  }
}
lexiOrder(hacker1, hacker2);

// Bonus 1
let lorem =
  "Vestibulum vestibulum nibh nisi, vel malesuada risus vulputate eu. Donec ac blandit nunc, mattis commodo mauris. Phasellus vel lacinia metus. Phasellus sit amet odio tellus. Mauris felis dolor, hendrerit in lobortis nec, lobortis sit amet ex. Aliquam eu viverra urna, ultrices varius dolor. Sed facilisis nunc sem, non imperdiet risus sodales vitae. Quisque non aliquet justo. Praesent venenatis cursus elit, sit amet bibendum nibh aliquet non. Quisque lorem felis, tristique ultrices luctus aliquam, rutrum et ante. Nulla bibendum, elit a venenatis porttitor, turpis neque rhoncus magna, sit amet lobortis lacus erat sit amet arcu. Nulla porttitor sollicitudin viverra. Donec ipsum urna, molestie at mollis quis, luctus non urna. Mauris vehicula a ante sodales semper. Curabitur ullamcorper urna scelerisque dolor gravida, et blandit lectus gravida. Aliquam nec venenatis elit. Donec id mollis nisi. Suspendisse tincidunt eu quam sit amet viverra. Nunc condimentum non odio at efficitur. Duis congue non erat vel elementum. Sed vitae lectus quis purus placerat consectetur sit amet vel est. Curabitur non tortor eu mi vestibulum lobortis at id sapien. Pellentesque dapibus consequat rutrum. Suspendisse venenatis, tortor quis volutpat maximus, urna neque maximus neque, sit amet luctus mi velit quis dolor. Sed feugiat tortor ipsum, elementum hendrerit nunc tincidunt in. Fusce vitae vehicula dui. Suspendisse consequat dictum eros ornare. Maecenas sodales, quam id fringilla tincidunt, velit orci hendrerit erat, vitae sollicitudin diam lorem facilisis ligula. Vivamus malesuada dolor sit amet lorem pretium posuere. Nullam a tristique mauris, pellentesque accumsan massa. Ut condimentum velit at dictum scelerisque. Suspendisse tortor purus, aliquet ligula id, malesuada consequat orci.";

const numberOfWords = lorem.split(" ");
console.log(`${numberOfWords.length} words`);

function wordLatin(params) {
  let result = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i].includes("et")) {
      result += 1;
    } else {
      result;
    }
  }
  return console.log(`${result} number of times that 'et' appears`);
}
wordLatin(numberOfWords);

// Bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";

function palindrome(params) {
  let reg = /[\W_]/g;
  let result = params.toLowerCase().replace(reg, "");
  let len = result.length;
  for (let i = 0; i < result / 2; i++) {
    if (result[i] !== result[len - 1 - i]) {
      return console.log(`It's not a palindrome!`);
    }
  }
  return console.log(`It is a palindrome!`);
}
palindrome(phraseToCheck);
