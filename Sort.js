const readlineSync = require('readline-sync');

// Function to perform bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swapping elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Function to read array from console input
function readArrayFromConsole() {
    const input = readlineSync.question('Enter numbers separated by spaces: ');
    const arr = input.split(' ').map(Number);
    return arr;
}

// Function to display array
function displayArray(arr) {
    console.log('Sorted Array:', arr.join(' '));
}

// Main function
function main() {
    console.log('Welcome to the Bubble Sort Program');
    const arr = readArrayFromConsole();
    console.log('Input Array:', arr.join(' '));
    const sortedArray = bubbleSort(arr);
    displayArray(sortedArray);
}

// Calling main function
main();
