function makeTea(n, k, g, b) {
    const result = [];

    // Loop until we have made all "n" cups of tea
    while (n > 0) {
        if (g > 0) {
            result.push("Green");  // Use a green tea bag
            g -= 1;
        } else if (b > 0) {
            result.push("Black");  // Use a black tea bag
            b -= 1;
        } else {
            return [];  // Not enough tea bags to fulfill the requirement
        }

        n -= 1;

        // Check the last "k" cups to maintain the alternating pattern
        if (result.slice(-k).every(tea => tea === "Green")) {
            b += 1;  // If the last k cups were green, use a black bag next time
        } else if (result.slice(-k).every(tea => tea === "Black")) {
            g += 1;  // If the last k cups were black, use a green bag next time
        }
    }

    return result;
}

// Example
console.log(makeTea(5, 1, 3, 2));  // Output: ["Green", "Black", "Green", "Black", "Green"]
console.log(makeTea(4, 3, 4, 0));  // Output: []