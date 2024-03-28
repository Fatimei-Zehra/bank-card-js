
let buttonConfirm = document.getElementById("btn-confirm");

// let cardSpans=document.querySelectorAll(".card-number div span");


let nameCard = document.querySelector("#name").oninput = () => {
    document.querySelector(".user-name").innerText = document.querySelector("#name").value;
}

let numberCard = document.querySelector("#card-num").oninput = () => {
    document.querySelector(".card-number").innerText = document.querySelector("#card-num").value;
}


let monthCard = document.querySelector("#card-month").oninput = () => {
    document.querySelector(".card-month").innerText = document.querySelector("#card-month").value;
}

let yearCard = document.querySelector("#card-year").oninput = () => {
    document.querySelector(".card-year").innerText = document.querySelector("#card-year").value;
}

let cvcCard = document.querySelector("#card-cvc").oninput = () => {
    document.querySelector(".cvv-code").innerText = document.querySelector("#card-cvc").value;
}


buttonConfirm.addEventListener("click", (e) => {
    e.preventDefault();
    let userName = document.getElementById("name");
    let userCardNumber = document.getElementById("card-num");
    let userCardMonth = document.getElementById("card-month");
    let userCardYear = document.getElementById("card-year");
    let userCardCvc = document.getElementById("card-cvc");

    //Card number
    let cardNumber = document.getElementById("card-num").value;
    let cardNumberDisplay = document.querySelectorAll(".card-num-display");

    // for (let i = 0; i < cardNumber.length; i += 4) {
    //     // cardNumberDisplay.innerText=
    //   (cardNumber.substring(i, i + 4));
    // }

    if (userName.value === "")
        userName.style.border = "2px solid  red"
    else userName.style.border = "2px solid green"


    if (userCardNumber.value > userCardNumber.length && userCardNumber.value < userCardNumber.length)
        userCardNumber.style.border = "2px solid red"
    else userCardNumber.style.border = "2px solid  green"


    if (userCardNumber.value === "")
        userCardNumber.style.border = "2px solid red"
    else userCardNumber.style.border = "2px solid  green"


    if (userCardMonth.value === "")
        userCardMonth.style.border = "2px solid red"
    else userCardMonth.style.border = "2px solid green"

    if (userCardMonth.value > 12)
        userCardMonth.style.border = "2px solid red"
    else userCardMonth.style.border = "2px solid green"

    if (userCardYear.value === "")
        userCardYear.style.border = "2px solid red"
    else userCardYear.style.border = "2px solid green"

    if (userCardCvc.value === "")
        userCardCvc.style.border = "2px solid red"
    else userCardCvc.style.border = "2px solid green"

    if (userCardCvc.value > 3)
        userCardCvc.style.border = "2px solid red"
    else userCardCvc.style.border = "2px solid green"
})





// var str = '4111111111111111';

// var parts = [];
// for (var i = 0; i < str.length; i += 4) {
//     parts.push(str.substring(i, i + 4));
// }
// console.log(parts);



