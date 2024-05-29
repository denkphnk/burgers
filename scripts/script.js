

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i ++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let buttons = document.getElementsByClassName("products-item");
for (let i = 0; i < buttons.length; i ++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

let burger = document.getElementById("burger");
let nam = document.getElementById("name");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
    let haserror = false;

    [burger, nam, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            haserror = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if (!haserror) {
        [burger, nam, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}

let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coef = 1;

    if (currentCurrency === "$") {
        newCurrency = "₽";
        coef = 90;
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coef = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coef).toFixed(1) + " " + newCurrency;
    }

}