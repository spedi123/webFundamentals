// function greetUser(firstName, lastName) {
//   console.log("Hello " + firstName + " " + lastName);
// }

// greetUser("Peter", "An");

/* 

parameter -> the words that represent what the function is expecting as input.
parameters are set when you define the function.

Argument -> the data that i give to the function when i invoke the function.

 */

function sum(num1, num2) {
  for (let i = 1; i < 10; i++) {
    console.log(i);
    if (i == 3) {
      break;
    }
  }
  console.log("before the return");
  return num1 + num2;
}

// sum(1, 2);

let artists = [
  "Drake",
  "J Cole",
  "MJ",
  "Hanna Montana",
  "Kanye",
  "Ariana Grande",
  "BTS",
];

function searchForArtist(artistName) {
  for (let i = 0; i < artists.length; i++) {
    if (artists[i] == artistName) {
      return "Found " + artistName + " at index number " + i;
    }
  }
  return "No artist found with that name";
}

console.log(searchForArtist("MJ"));
console.log(searchForArtist("BTS"));
console.log(searchForArtist("PSY"));
