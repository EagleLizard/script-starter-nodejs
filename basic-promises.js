
module.exports = {
  timeoutExample,
  simplePromiseExample,
  sleepExample,
  sleepExampleAwait,
};

function timeoutExample() {
  // A regular timeout will schedule code that will execute asynchronous (async)
  // Asynchronous means the code in the timeout will not execute line-by-line
  console.log('log 1');
  setTimeout(() => {
    console.log('log 2');
  }, 10); // the second parameter is a number in milliseconds
  console.log('log 3');
  // output:
  // log 1
  // log 3
  // log 2
}

function simplePromiseExample() {
  // Promises work similar to timeout, because they execute async
  console.log('promise log 1')
  new Promise((resolve, reject) => {
    /*
      When you make a promise, you pass in a callback function as a parameter.
        The callback will received 2 functions as parameters automatically.
        'resolve' is similar to a normal function 'return', it indicates success
        'reject' is called to indicate an error
    */
    console.log('promise log 2');
    resolve(); // since we call resolve immediately, the code will run synchronously
  });
  console.log('promise log 3');
  // output:
  // promise log 1
  // promise log 2
  // promise log 3
}

function sleepExample() {
  console.log('sleep log 1'); 
  sleep(1000, 'sleep log 2');
  console.log('sleep log 3');
  // output:
  // sleep log 1
  // Waiting 1000 milliseconds...
  // sleep log 3
  // sleep log 2

  /*
    This is not the behavior we expected or want,
      it wold us it was waiting and then printed the 3rd log
      before the 2nd.
    We'll do this differently by waiting for the promise first
      in the next example
  */
}

// 'async' is a special keyword that lets us work with promise-based code
async function sleepExampleAwait() {
  console.log('sleep log 1'); 
  await sleep(1000, 'sleep log 2');
  console.log('sleep log 3');
}

/*
  Wait a number of milliseconds, then log a message
*/
function sleep(milliseconds, message) {
  // We can create a timeout that uses promises,
  //  which will give us extra functionality
  let sleepPromise = new Promise((resolve, reject) => {
    console.log('Waiting ' + milliseconds + ' milliseconds...');
    setTimeout(() => {
      console.log(message);
      resolve();
    }, milliseconds);
  });
  return sleepPromise;
}
