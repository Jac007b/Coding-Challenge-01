const input = document.getElementById("headlineInput");
const button = document.getElementById("updateBtn");
const cta = document.getElementById("cta");

button.addEventListener("click", function () {

    if (input.value.trim() !== "") {
        cta.textContent = input.value;
    }

});