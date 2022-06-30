async function getCoins() {
  let coinlist = document.querySelector("#coinList");
  var responseApi = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  var coinData = await responseApi.json();

  for (let i = 0; i < coinData.length; i++) {
    let currentCoin = coinData[i];
    let pTag = document.createElement("p");
    pTag.innerText = currentCoin.name + " - " + currentCoin.current_price;

    pTag.classList.add("coin");

    coinlist.appendChild(pTag);
  }
}
