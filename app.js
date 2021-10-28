const form = document.getElementById("form");
const button = document.getElementById("submit-btn");
const input = document.querySelectorAll(".input-box");
const email = document.getElementById("email");
const regex = /^\w+([\.-]?\w+)*@*\w+([\.-]?\w+)*(.\w{2,3})+$/;

button.addEventListener("click", () => {
    input.forEach((item) => {
        if(item.value == "") {
            item.classList.add("empty");
            item.setAttribute("placeholder", "");
            item.nextElementSibling.setAttribute("aria-hidden", "false");
        } else {
            item.classList.remove("empty");
            item.nextElementSibling.setAttribute("aria-hidden", "true");
        }
    });
    if(!email.value.match(regex)) {
        email.classList.add("invalid");
        email.value = "email@example/com";
    } else {
        email.classList.remove("invalid");
    }
})
