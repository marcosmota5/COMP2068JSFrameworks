/*
    COMP2068 Assignment 3
    Student Id: 200564426
    Student Name: Marcos Oliveira Mota
    Created on: 2025-06-09
*/

// Create the connect, http and url modules
const connect = require('connect');
const http = require('http');
const url = require('url');

// Function to perform the calculation
function calculate(req, res) {
    // Parse the URL to get the query parameters later and store it in a variable
    const parsedUrl = url.parse(req.url, true);

    // Get the query parameters from the parsed URL
    const query = parsedUrl.query;

    // Get the method and numbers from the query parameters
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);

    // If any of the numbers are not actual numbers, return an error message
    if (isNaN(x) || isNaN(y)) {
        res.end('Error: x and y must be valid numbers.');
        return;
    }

    // Declare the result and operator variables
    let result;
    let operator;

    // Check the method and perform the corresponding calculation
    switch (method) {
        // If the method is add, perform an addition
        case 'add':
            result = x + y;
            operator = '+';
            break;
        // If the method is add, perform an subtraction
        case 'subtract':
            result = x - y;
            operator = '-';
            break;
        // If the method is multiply, perform a multiplication
        case 'multiply':
            result = x * y;
            operator = '*';
            break;
        // If the method is divide, perform a division
        case 'divide':
            // If y is zero, return an error message to avoid division by zero
            if (y === 0) {
                res.end('Error: Division by zero.');
                return;
            }
            result = x / y;
            operator = '/';
            break;
        // If the method is not recognized, return an error message
        default:
            res.end('Error: Invalid method. Use add, subtract, multiply, or divide.');
            return;
    }

    // Write the response with the result of the calculation
    res.end(`${x} ${operator} ${y} = ${result}`);
}

// Create the server using Connect
const app = connect();

// Use the calculate function as a middleware
app.use('/lab03', calculate);

// Start the server and logs the URL where it is running in the console
http.createServer(app).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
