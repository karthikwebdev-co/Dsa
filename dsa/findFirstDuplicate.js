const findFirstDuplicate = (arr) => {
    const set = new Set();
    for (const item of arr) {
        if (set.has(item)) {
            return item;
        }
        set.add(item)
    }
    return -1;
}

console.log(findFirstDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))//-1
console.log(findFirstDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]))//1
console.log(findFirstDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2]))//2
console.log(findFirstDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3]))//3