
1.
let arr1 = [3, 7, 34, 90, 12];console.log(arr1[arr1.length - 1]);  

let arr2 = [true, "green", "where", 12, 56];console.log(arr2[arr2.length - 1]); 

 

2.
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let petsString = myPets.join(", ");
 console.log(petsString); 

arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];arr3.sort((a, b) => a - b);
console.log(arr3); 

4. 
let arr = ["boy", "man", "girl", "school", "girl", "woman"];
let uniqueArr = [...new Set(arr)]; 

let duplicatesArr = arr.filter((item, index) => arr.indexOf(item) !== index); 
console.log(uniqueArr); 
console.log([...new Set(duplicatesArr)]); 

5. 
let arr5 = ["the", "way", "x", 4];
let searchWord = "food";
let result = arr5.includes(searchWord) ? searchWord : "the search word was not found";
console.log(result); 


6. Sort a string:
let word = "renniw";
let sortedWord = word.split('').sort().join('');
console.log(sortedWord); 