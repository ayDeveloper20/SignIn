document.addEventListener("DOMContentLoaded", () => {
    let formButton = document.querySelector(".inputs button");
    let formInput = document.querySelector(".inputs input");
    let formError = document.querySelector(".inputs h5");
    let rightmain = document.querySelector(".right");
    let leftmain = document.querySelector(".left");
    let main = document.querySelector("main");
    let thanks = document.querySelector(".main");
    // Check if email is already in localStorage
    let savedEmail = localStorage.getItem("email");
    if (savedEmail) {
        displayThanksMessage(savedEmail);
    }

    formButton.addEventListener("click", () => {
        let email = formInput.value.trim();
        if (email === "") {
            formError.textContent = "Please enter a valid email";
        } else {
            localStorage.setItem("email", email);
            displayThanksMessage(email);
            formInput.value = "";
        }
    });

    function displayThanksMessage(email) {
        rightmain.classList.add("hide");
        leftmain.classList.add("hide");
        main.style.width = "fit-content";
        formError.textContent = "";
        thanks.classList.add("active");
        thanks.querySelector("p").innerHTML = `A confirmation email has been sent to <span class="email">${email}</span>. Please open it and click the button inside to confirm your subscription.`;
    }
    document.querySelector(".close").addEventListener("click", () => {
        thanks.classList.remove("active");
        rightmain.classList.remove("hide");
        leftmain.classList.remove("hide");
        main.style.width = "700px";
    });
});
