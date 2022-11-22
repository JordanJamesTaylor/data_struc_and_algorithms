/*
    Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

    You must write an algorithm with O(log n) runtime complexity.

    n = length of nums array
*/
const nums1 = [-1,0,3,5,9,12];
const nums2 = [-1,0,3,5,9,12];

function binarySearch(nums, target){

    // Break array in half
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        let middle = Math.floor((left + right) / 2); // Grab the middle element

        if(target === nums[middle]) return middle; // Check if it's === target for an early return

        // Move through list
        if(target < nums[middle]){
            right = middle - 1;
        }else{
            left = middle + 1;
        }
    }

    return -1;
};

console.log(binarySearch(nums1, 9)); // 4 
console.log(binarySearch(nums2, 2)); // -1