// Palindrome task
// 1. check if word is a palindrome
// 2. check if a sentence is a palindrome, when checking if it is a palindrome, a sentence ignores punctuation and spaces 
// 3. check if a string is a palindrome if we can remove at most one character 

// BONUS: assume the input string could be many gigabytes big, therefore it is preferable 
// that the solution does not allocate new memory for the input string
// i.e. we should not clone the input string s into a new varibale of similar size


function word(s) {
  // flip the given input string
  // compare the reveresed string to original string
  // if match is exact, return true, else false

  const reverseString = s.split("").reverse().join("");
  if (reverseString === s) {
    console.log("Palindrome word: true");
    return true;
  } else {
    console.log("Palindrome word: false");
    return false;
  }
}


function sentence(s) {
  // remove all punctuation and spaces in the sentence with regex
  const punctuationless = s.replace(/[.,/#!$%^&*;:{}=-_`'~()]/g, "").replace(/\s/g, "");
  console.log(punctuationless);
  const reverseString = punctuationless.split("").reverse().join("");
  if (reverseString === punctuationless) {
    console.log("Palindrome sentence: true");
    return true;
  } else {
    console.log("Palindrome sentence: false");
    return false;
  }
}

function removeAtMostOne(s) {
  // find the middle index and remove that value
  let midIndexOdd = s.length / 2 - 1;
  const charRemoved = s.replace(midIndexOdd, "");
  console.log(s);
  console.log(midIndex);
  console.log(charRemoved);

  const reverseString = charRemoved.split("").reverse().join("");
  if (reverseString === charRemoved) {
    console.log("Palindrome without a char: true");
    return true;
  } else {
    console.log("Palindrome without a char: false");
    return false;
  }
}

word("hannah");
sentence("don't nod");
removeAtMostOne("levrel");