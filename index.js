// Code your solutions in this file
// index.js

// Function to generate thank you messages
function writeCards(names, event) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
}

// Function to count down from a given number
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

// Exporting the functions if needed in a Node.js environment
module.exports = {
    writeCards,
    countDown
};
