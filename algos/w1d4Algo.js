// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   i = i + 3;
// }

// console.log("outside of the loop " + i);

// let artists = ["MJ", "Drake", "J Cole", "Taylor Swift", "Beyonce"];
// for (var j = 0; j < artists.length; j++) {
//   if (artists[j] == "MJ") {
//     console.log("King of Pop");
//   } else {
//     console.log(artists[j]);
//   }
// }

var isSunny = true;
var temperature = 45;
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
  whatToBring += "sunglasses, ";
}
if (temperature < 50) {
  whatToBring += "a coat, ";
}
if (isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

// console.log(whatToBring);

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
