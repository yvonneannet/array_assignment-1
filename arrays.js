
// 1.Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3, 7, 34, 90, 12];console.log(arr1[arr1.length - 1]);

let arr2 = [true, "green", "where", 12, 56];console.log(arr2[arr2.length - 1]);



// 2.Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let petsString = myPets.join(", ");
console.log(petsString);

// 3.Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort((a, b) => a - b);
console.log(arr3); 

// 4. Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
// let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
// let arr = ["boy", "man", "girl", "school", "girl", "woman"];


// 5. Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"
let arr5 = ["the", "way", "x", 4];
let searchWord = "food";
let result = arr5.includes(searchWord) ? searchWord : "the search word was not found";
console.log(result); 


// 6.Write a JS script to sort the following string:let word = "renniw" 
let word = "renniw";
let sortedWord = word.split('').sort().join('');
console.log(sortedWord); 