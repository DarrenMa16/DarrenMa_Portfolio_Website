console.log("loaded class.js");

document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.querySelector("form");
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = formElement.querySelector("#name").value;
        const useremail = formElement.querySelector("#email").value;
        const message = formElement.querySelector("#message").value;
        //console.log(username + " " + useremail + " " + message);

        let nameValid = false;
        let emailValid = false;
        let messageValid = false;

        if(username.length > 1)
            nameValid = true;
        else
            console.log("invalid name");

        if(useremail.length > 7)
            emailValid = true;
        else
            console.log("invalid email");

        if(message != "I like this site because: " || message.length > 2)
            messageValid = true;
        else
            console.log("invalid message");

        if(nameValid && emailValid && messageValid)
            formElement.submit();
    });
});