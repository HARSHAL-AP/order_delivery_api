// Solution for Problem 1 (Am I Perfect?)

function perfectNumber(n) {
  // Initializeign the factor sum variabel to keep track of sum of factors with 1 as a common factor for all number
  var factorSum = 1;

  // Finding all Possibel factors of n  and adding it into factorSum variable .
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factorSum += i;
      if (i !== n / i) {
        factorSum += n / i;
      }
    }
  }

  // Classifying the number based on the sum of factors
  if (factorSum === n) {
    return "Perfect";
  } else if (factorSum > n) {
    return "Abundant";
  } else {
    return "Deficient";
  }
}

console.log(perfectNumber(6)); // Output is "Perfect".

//  Solution for Problem 2 (Shorten me!)

function encode(string) {
  let ans = ""; // Initialize an empty string to store the encoded result
  count = 1;  // Initialize the count of consecutive characters
  for (let i = 1; i <= string.length; i++) {
    if (i < string.length && string[i] === string[i - 1]) {
      count++;// Increment count for consecutive characters
    }
    else{
        // Append the count (if greater than 1) and the character to the encoded string
        ans+=(count>1?count:"")+string[i-1]
        count=1  // Reset count for the next character
    }
  }
  return ans;  // Return the encoded string
}

function decode(string) {
    let decoded = ''; // Initialize an empty string to store the decoded result
    let count = ''; // Initialize a string to store the count value
  
    for (let char of string) {
      if (isNaN(Number(char))) {
        // If the character is not a number, repeat the character by the count value (if any)
        decoded += char.repeat(count === '' ? 1 : parseInt(count));
        count = ''; // Reset the count
      } else {
        count += char; // Build the count string
      }
    }
  
    return decoded; // Return the decoded string
  }




console.log(encode("AAAAAAAAAAABWWWWWWWWWWWBB"))
console.log(decode("11AB11W2B"))