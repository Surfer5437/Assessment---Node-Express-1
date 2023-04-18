### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    you can run many get requests in parallel or in sequence if each request is dependant on the one before. 

- What is a Promise?
    A promise is an object with a pending result and made into a fulfilled result or failed result after receiving or not receiving a response from the server. 
- What are the differences between an async function and a regular function?
    an async/await function will send a request and await a fulfilled/failed promisory response before moving onto the next line in the JavaScript, and a regular function will not wait for the response before continuing with the script.
- What is the difference between Node.js and Express.js?
    Node.JS is the server routes that Express.JS reads from and Express.JS is the server looking for hour it should run with the app=express() class.
- What is the error-first callback pattern?
    check if an error could be caused and catch it first before introducing logic to it.
- What is middleware?
    code that runs behind your code to help
- What does the `next` function do?
    tells javascript to continue to run onto the next matching function or getter.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
    1 - it waits for a response to each URL before going onto the next.
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
