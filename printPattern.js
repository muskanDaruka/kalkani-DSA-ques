const n = parseInt(prompt("Enter your lucky number..."));

function printPattern(nums) {
    for (let i = 1; i <= nums; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
    for (let i = nums - 1; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

const output = printPattern(n);
console.log(output);
