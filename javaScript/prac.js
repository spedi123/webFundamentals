function pizzaOven(crustType, sauce, cheese, topping) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauces = sauce;
  pizza.cheeses = cheese;
  pizza.toppings = topping;
  return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", [
  "pepproni",
  "sausage",
]);
var p2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
var p3 = pizzaOven("thin crust", "tomato", "goat cheese", [
  "tomato",
  "banana pepper",
  "ham",
  "pineapple",
]);

var p4 = pizzaOven(
  "regular",
  "cream",
  ["mozzarella", "extra cheese"],
  ["bacon", "onion", "garlic"]
);
console.log(p1, p2, p3, p4);

var crustTypes = [
  "deep dish",
  "hand tossed",
  "thin crust",
  "square cut",
  "rice",
  "gluten free",
];
var sauces = ["traditional", "marinara", "tomato", "cream", "bbq", "pesto"];
var cheeses = [
  "mozzarella",
  "goat cheese",
  "america cheese",
  "cheddar",
  "parmesan",
  "feta",
];
var toppings = [
  "onions",
  "pepper",
  "bacon",
  "chicken",
  "olives",
  "tomato",
  "bell pepper",
  "mushrooms",
  "avocado",
  "sausage",
];

function randomRange(max, min) {
  return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
  var i = Math.floor(arr.length * Math.random());
  return arr[i];
}

function randomPizza() {
  var pizza = {};
  pizza.crustType = randomPick(crustTypes);
  pizza.sauceType = randomPick(sauces);
  pizza.cheeses = [];
  pizza.toppings = [];
  for (var i = 0; i < randomRange(5, 1); i++) {
    pizza.cheeses.push(randomPick(cheeses));
  }
  for (var i = 0; i < randomRange(9, 1); i++) {
    pizza.toppings.push(randomPick(toppings));
  }
  return pizza;
}

console.log(randomPizza());
