arr = [1, 2, 3];

function spreadOp() {
    // 🧩 Use spread operator to combine all elements of arr with 4 and 5 at the end
    return [...arr, 4, 5];
    // return [4, 5, ...arr]; 
    // 🧩 This would put 4 and 5 at the start, then all elements of arr
}

console.log(spreadOp()); // 🖨️ Output: [1, 2, 3, 4, 5]

// 🧑‍💻✨ The spread operator (...) copies all elements from the original array and adds new values at the end!
// Example above: [1, 2, 3, 4, 5]
// If you use [4, 5, ...arr], result will be: [4, 5, 1, 2, 3] 🚀
