// complete the following function
function flatten(arr2d) {
  var flat = [];
  var flat1 = arr2d.flat();
  flat.push(flat1);
  return flat;
}

var result = flatten([
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7],
]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

// var pokémon = [
//   { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
//   { id: 5, name: "Charmeleon", types: ["fire"] },
//   { id: 9, name: "Blastoise", types: ["water"] },
//   { id: 12, name: "Butterfree", types: ["bug", "flying"] },
//   { id: 16, name: "Pidgey", types: ["normal", "flying"] },
//   { id: 23, name: "Ekans", types: ["poison"] },
//   { id: 24, name: "Arbok", types: ["poison"] },
//   { id: 25, name: "Pikachu", types: ["electric"] },
//   { id: 37, name: "Vulpix", types: ["fire"] },
//   { id: 52, name: "Meowth", types: ["normal"] },
//   { id: 63, name: "Abra", types: ["psychic"] },
//   { id: 67, name: "Machamp", types: ["fighting"] },
//   { id: 72, name: "Tentacool", types: ["water", "poison"] },
//   { id: 74, name: "Geodude", types: ["rock", "ground"] },
//   { id: 87, name: "Dewgong", types: ["water", "ice"] },
//   { id: 98, name: "Krabby", types: ["water"] },
//   { id: 115, name: "Kangaskhan", types: ["normal"] },
//   { id: 122, name: "Mr. Mime", types: ["psychic"] },
//   { id: 133, name: "Eevee", types: ["normal"] },
//   { id: 144, name: "Articuno", types: ["ice", "flying"] },
//   { id: 145, name: "Zapdos", types: ["electric", "flying"] },
//   { id: 146, name: "Moltres", types: ["fire", "flying"] },
//   { id: 148, name: "Dragonair", types: ["dragon"] },
// ];

// for (i = 0; i < pokémon.length; i++) {
//   if (pokémon[i].types.includes("poison")) {
//     pokémon[i].reverse();
//   }
// }
