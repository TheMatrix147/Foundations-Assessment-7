function addToZero(numbers) {
    const listedNumbers = new Set();

    for (const num of numbers) {
        if (listedNumbers.has(-num)) {
            return true; 
        }
        
        listedNumbers.add(num);
    }

    return false;
}

console.log(addToZero([]));          
console.log(addToZero([1]));         
console.log(addToZero([1, 2, 3]));    
console.log(addToZero([1, 2, 3, -2])); 
// Runtime complexity is O(n)


function hasUniqueChars(word) {
    const listedCharacters = new Set();

    for (const char of word) {
        if (listedCharacters.has(char)) {
            return false; 
        }

        listedCharacters.add(char);
    }

    return true;
}

console.log(hasUniqueChars("Monday"));  
console.log(hasUniqueChars("Moonday")); 
// Runtime complexity is O(n)


function isPangram(sentence) {
    const uniqueLetters = new Set();
    const modifySentence = sentence.toLowerCase().replace(/[^a-z]/g, '');

    for (const char of modifySentence) {
        uniqueLetters.add(char);

        if (uniqueLetters.size === 26) {
            return true; 
        }
    }

    return false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!")); 
console.log(isPangram("I like cats, but not mice")); 
// Runtime complexity is O(n)


function findLongestWord(words) {
    let longestLength = 0;

    for (const word of words) {
        const currentLength = word.length;
        if (currentLength > longestLength) {
            longestLength = currentLength;
        }
    }

    return longestLength;
}

console.log(findLongestWord(["hi", "hello"])); 
// Runtime complexity is O(n)