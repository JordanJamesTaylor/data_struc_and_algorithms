/*
    Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.
*/

const nums = [1,3,5,6];

function searchInsert(numbers, target){

    let left = 0;
    let right = numbers.length-1;

    if(target < numbers[left]) return 0;
    if(target > numbers[right]) return numbers.length;

    while(left <= right){
        let middle = Math.floor(left + (right - left) / 2);
        
        if(numbers[middle] === target) return middle; 

        if(target < numbers[middle]){
            right = middle - 1;
        }else{
            left = middle + 1;
        }
    }

    return left;
};

console.log(searchInsert(nums, 5)); // 2
console.log(searchInsert(2)); // 1
console.log(searchInsert(7)); // 4