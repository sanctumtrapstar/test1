let display = document.querySelector(".display");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Error!";
        }
        break;
      case "+/-":
        display.innerText = "-";
        break;
      case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
      default:
        if (display.innerText === "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});

const menuBtn = document.querySelector('.img-logo');
const menuMobile = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--active');
});






const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const swipe = document.querySelector('.garant_right');

btn1.addEventListener('click', () => {
  swipe.classList.remove('swipe');
});
btn2.addEventListener('click', () => {
  swipe.classList.add('swipe');
  console.log('пидарас')
});








