// These are the elements we are fetching rom Document object model to manipulate over them
let leftbasket = Number(document.querySelector(".baskt1-count").innerText);
let rightBasket = Number(document.querySelector(".bskt2-count").innerText);
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let leftbasketCOunt = document.querySelector(".baskt1-count");
let rightBasketCount = document.querySelector(".bskt2-count");

// calling this function when script file will start excecuting in the top
manipulateDOM();

// In this function i am going to write all the logic which will make the feauture work;
function manipulateDOM() {
    // Adding event listener on the left arrow button
    leftArrow.addEventListener("click", function () {
        // writing the conditions here for our logic
        if (leftbasket >= 0 && rightBasket <= 10) {
            leftbasket++;
            rightBasket--;
            leftbasketCOunt.innerText = leftbasket;
            rightBasketCount.innerText = rightBasket;
        }

        if (leftbasket == 10 && rightBasket == 0) window.alert("You are already ful with apples");

    });


    // Adding event listener on the right arrow button
    rightArrow.addEventListener("click", function () {
        if (rightBasket >= 0 && leftbasket <= 10) {
            rightBasket++;
            leftbasket--;
            leftbasketCOunt.innerText = leftbasket;
            rightBasketCount.innerText = rightBasket;
        }

        if (rightBasket == 10 && leftbasket == 0) { window.alert("basket 2 you are already full filled with apples") }
    });
}




// Conclusion --> This type of prgramming where we are changing the values of variables and then telling the dom to update it into the DOM this type of programming is knwon as imperitive programming where we have to update all the changes into the DOm but react is based on declarative programming when the value || state change react automatically changes the DOM this type of programming is known as declarative programming.So we have to learn react js because it is very good to make web applications