// 27. Remove Element ( EASY )

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.

var removeElement = function (nums, val) 
{
  let counterVal = 0

  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) 
  {
    if (nums[i] == val) 
    {
      nums[i] = val;
      if (i != numsLength - 1)
      {
        counterVal++;
      }
    }
  }

  let changeCounter = 0;
  for (let i = 0; i < numsLength; i++) 
  {    
    if (nums[i] == val)
    {
      for (let j = numsLength - 1; j > 0; j--) 
      {
        {
          if ( nums[j] != val )
          {
            temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            changeCounter++;
            break;
          }
        }
      }
      if ( counterVal == changeCounter)
      {
        break;
      }
    }
  }
  for (let i = 0; i <= counterVal; i++)
  {
    nums.pop();
  }
  return nums;
};

nums = [3,2,2,3];
val = 3;
console.log(removeElement(nums, val));  // [2, 2]

nums = [0,1,2,2,3,0,4,2];
val = 2;
console.log(removeElement(nums, val));  // [0, 1, 4, 0, 3]