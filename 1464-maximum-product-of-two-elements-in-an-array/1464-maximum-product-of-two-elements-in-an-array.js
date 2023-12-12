/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let sorted = nums.sort((a,b)=>a-b)
   let highest=nums[nums.length-1]
   let lowest=nums[nums.length-2]
   return (highest-1)*(lowest-1)
  
   
}