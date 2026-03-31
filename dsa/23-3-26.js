// Count how many times target appears
const howManyAppears = (nums, target) => {

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target)
            count++
    }
    return count
}

let nums = [1, 2, 3, 2, 4, 2]
let target = 2
console.log(howManyAppears(nums, target))


//  Pattern 2: Hashing (VERY IMPORTANT)
// Next Problem:

// 👉 Two Sum (again, but properly with pattern thinking)

// 🧠 Your Thinking Task (No Code Yet)

// Given:

// [2,7,11,15], target = 9

// 👉 Question:

// Instead of checking all pairs,
// What can you store while iterating to make it faster?