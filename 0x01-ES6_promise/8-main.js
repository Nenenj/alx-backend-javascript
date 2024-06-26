import divideFunction from './8-try';

try {
    console.log(divideFunction(10, 2));  // This should work fine
} catch (error) {
    console.error(error.message);
}

try {
    console.log(divideFunction(10, 0));  // This should throw an error
} catch (error) {
    console.error(error.message);
}
