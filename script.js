const passwordWarning = document.querySelector(".password-warning");
const passwordBox1 = document.querySelector("#password");
const passwordBox2 = document.querySelector("#confirm");
const createButton = document.querySelector(".submit");

createButton.addEventListener("click", () => {
    checkMatchingPasswords(passwordBox1.value, passwordBox2.value);
} );

function checkMatchingPasswords(password1, password2) {
    if(!password1 || !password2) {
        console.log("1 of these are empty");
        return;
    } 

    if(password1 === password2) {
        passwordWarning.textContent = "";
        passwordBox1.setCustomValidity("");
        passwordBox2.setCustomValidity("");
    } else {
        passwordWarning.textContent = "* Passwords do not match";
        passwordBox1.setCustomValidity("Invalid field.");
        passwordBox2.setCustomValidity("Invalid field.");
    }
}