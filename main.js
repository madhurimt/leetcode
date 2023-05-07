//Brute force method - time complexity -O(N) sqauare

let nums = [2, 7, 11, 15];
// let arr = [3, 7, 2, 8];
let target = 9;

for (let i = 0; i < nums.length; i++) {
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == target) {
      console.log(i, j);
    }
  }
}

//Another method using Hashmap

let check = new Map();

for (let i = 0; i < nums.length; i++) {
  let diff = target - nums[i];

  if (check.has(diff)) {
    console.log([check.get(diff), i]);
  } else {
    check.set(nums[i], i);
  }
}
