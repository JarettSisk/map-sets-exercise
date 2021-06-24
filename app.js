// 1.
// new Set([1,1,2,2,3,4])
// Answer: It returns a new set with 4 items (no duplicates). 



// 2.
// [...new Set("referee")].join("")
// Answer: It returns a string with the value "ref". (Uses destructuring tp create an array, and then uses the join method to concatenate each element into a single string)



// 3.
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// Answer: It is a map with 2 sets of key value pairs. The keys being [1,2,3] and values being true and false. (An issue with this is we cannot acess the keys because the reference to those specific arrays is not accessible)



// 4.
// Answer:
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false

// 5.
// Answer:
function vowelCount(string) {
  const vowels = "aeiou";
  const newMap = new Map();
  for(char of string) {
    if(vowels.indexOf(char) !== -1) {
      if(newMap.get(char) !== undefined) {
        newMap.set(char, newMap.get(char) + 1);
      }
      else {
        newMap.set(char, 1);
      }
    }
  }
  return newMap;
}


console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')) // Map { 'o' => 1 }
