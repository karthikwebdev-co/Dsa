const isDuplicate = (arr) => {
    let set = new Set();
    for (const item of arr) {
        if (set.has(item)) {
            return true;
        }
        set.add(item)
    }
    return false;
}

console.log(isDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))//false
console.log(isDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]))//true