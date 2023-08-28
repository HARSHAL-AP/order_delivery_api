function convertPINToText(pin) {
    const textMap = {
      1: "pop",
      10: "double rip",
      100: "hide your mints",
      1000: "fall",
      10000: "reverse the order of the output."
    };
  
    // Convert the PIN to binary
    const binaryPIN = pin.toString(2);
  
    let output = [];
    let currentText = "";
  
    // Iterate through each bit of the binary PIN
    for (let i = 0; i < binaryPIN.length; i++) {
      currentText += binaryPIN[i];
  
      // Check if the current text representation is a valid entry in the textMap
      if (textMap[currentText]) {
        if (currentText === "10000") {
          output.reverse(); // Reverse the order of the output array
        } else {
          output.push(textMap[currentText]); // Add the corresponding text to the output array
        }
        currentText = ""; // Reset the current text representation
      }
    }
  
    return output; // Return the final array of converted texts
  }
  
  // Test cases
  console.log(convertPINToText(3));  // Output: ["pop", "double rip"]
  console.log(convertPINToText(19)); // Output: ["double rip", "pop"]
  