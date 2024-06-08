const nums = parseInt(prompt("Enter a number..."));

function printFibonacciSeries(n) {
    if (n <= 1) {
        return n;
    }
    return printFibonacciSeries(n - 1) + printFibonacciSeries(n - 2)
}
const output = printFibonacciSeries(nums);
console.log(output);
