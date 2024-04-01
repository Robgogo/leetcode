/**
 * 217. Contains Duplicate
Solved
Easy
Topics
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. 
 */

const containsDuplicate = (nums: number[]): boolean => {
  return new Set<number>(nums).size < nums.length;
};
