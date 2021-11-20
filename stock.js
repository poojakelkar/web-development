const stock = document.getElementById("stock-name");
const submit = document.getElementById("submit");

var serverURL = "https://stock-api.desaihetav.repl.co/current-price/";

function fetchURL(input) {
    return serverURL + input;
}

function fetchAPI() {
    stock = stock.toUpperCase();
    fetch(fetchURL(stock))
        .then((response) => response.json())
        .then((json) => {
            var currentprice = json.current_price;
            console.log(currentprice);
        });
}

submit.addEventListener("click", fetchAPI);
