//two sum problem
function twoSum(nums, target) {
    let hasValue = new Map()
    for (let i = 0; i < nums.length; i++) {
        let value = target - nums[i]
        if (hasValue.has(value)) {
            return [hasValue.get(value), i]
        }
        hasValue.set(nums[i], i)
    }
    return []
};

console.log(twoSum([2, 7, 11, 15], 18))