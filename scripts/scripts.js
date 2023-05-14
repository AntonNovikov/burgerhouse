document.getElementById("main-action-button").onclick = function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

let links = document.querySelectorAll(".menu-item >a");
links.forEach(function (link) {
  link.onclick = function () {
    document
      .getElementById(link.getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
});

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document
      .getElementById(links[i].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

let buttons = document.querySelectorAll(".product-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
}
let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
  let hasError = false;
  [burger, name, phone].forEach((item) => {
    if (!item.value) {
      item.parentElement.style.background = "red";
      hasError = true;
    } else {
      item.parentElement.style.background = "";
    }
  });

  if (!hasError) {
    [burger, name, phone].forEach((item) => {
      item.value = "";
    });
    alert("Спасибо за заказ");
  }
};

let prices = document.getElementsByClassName("products-item-price");

document.getElementById("change-currency").onclick = function (e) {
  let currentCurrency = e.target.innerText;
  let newCurrency = "$";
  let coefficient = 1;

  if (currentCurrency === "$") {
    newCurrency = "₽";
    (coefficient = 77), 36;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYR";
    (coefficient = 2), 52;
  } else if (currentCurrency === "BYR") {
    newCurrency = "¥";
    (coefficient = 135), 74;
  } else if (currentCurrency === "¥") {
    newCurrency = "KWD";
    coefficient = 0.31;
  } else if (currentCurrency === "KWD") {
    newCurrency = "€";
    coefficient = 0.91;
  }
  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerHTML = `${(
      prices[i].getAttribute("data-base-price") * coefficient
    ).toFixed(2)} ${newCurrency}`;
  }
};
