/*
    COMP2068 Assignment 2
    Student Id: 200564426
    Student Name: Marcos Oliveira Mota
    Created on: 2025-05-23
*/

// Create the prompt module
const prompt = require('prompt');

// Store the possible choices
const choices = ['ROCK', 'PAPER', 'SCISSORS'];

// Start the prompt
prompt.start();

// Ask the user to type a choice
console.log('Please choose ROCK, PAPER, or SCISSORS:');

// Use the get method to ask the user for their choice, calculate the computer's choice, and determine the winner
prompt.get(['userSelection'], function (err, result) {

    // If any error happened, log it and return
    if (err) {
        console.error(err);
        return;
    }

    // Get the user selection and convert it to uppercase
    const userSelection = result.userSelection.toUpperCase();

    // Check if the possible choices include the user choice, if not, log an error message and return
    if (!choices.includes(userSelection)) {
        console.log('Invalid choice. Please choose ROCK, PAPER, or SCISSORS.');
        return;
    }

    // Generate a random number between 0 and 1 to simulate the computer's choice
    const randomNum = Math.random();

    // Declare the computer selection variable
    let computerSelection = '';

    // Use the random number to determine the computer's choice
    if (randomNum <= 0.34) {
        computerSelection = 'PAPER';
    } else if (randomNum <= 0.67) {
        computerSelection = 'SCISSORS';
    } else {
        computerSelection = 'ROCK';
    }

    // Display both the user and computer selections
    console.log(`User chose: ${userSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    // Check the user selection and show the result
    if (userSelection === computerSelection) {
        console.log("It's a tie");
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        console.log('User Wins');
    } else {
        console.log('Computer Wins');
    }
});
