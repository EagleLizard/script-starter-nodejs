
const fs = require('fs'); // fs short for 'file system', it is built-in to nodejs

const basicPromises = require('./basic-promises'); // you can pull in code from other JS files to use with require and the relative file path

/*
  We can call the 'main' function on a line before the line it is declared on.
    When you create a function using the 'function' keyword, the reference to that
    function gets hoisted to the top of the scope. See hoisting in JS for more info
  This makes code easy to read, since everything important happens at the top
    of the file, making it the first thing you see.
*/
main();

function main() {
  simpleSum();
  // basicPromises.timeoutExample();
  // basicPromises.simplePromiseExample();
  // basicPromises.sleepExample();
  // basicPromises.sleepExampleAwait();
}

/*
  Reads a file with numbers in it, adds it, and logs the result
*/


function simpleSum() {
  let numbersFilePath = __dirname + '/numbers.txt'; // __dirname is the full directory path of the current .js file
  let numbersFileData = fs.readFileSync(numbersFilePath).toString(); // get the whole file as raw data, converts to string
  let sum = 0;
  let numbersArray = numbersFileData.split('\n');
  for (let n of numbersArray) {
    number = Number(n);
    sum += number;
  }
  console.log(sum);
  fs.writeFileSync("numbers_out.txt", `sum = ${sum}`); 

}
