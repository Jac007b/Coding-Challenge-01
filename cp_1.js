// Get elements
const form = document.getElementById("feedback-form");
const feedbackDisplay = document.getElementById("feedback-display");
const message = document.getElementById("message");
const comments = document.getElementById("comments");
const charCount = document.getElementById("char-count");

// Character counter using input event

comments.addEventListener("input", function () {
    charCount.textContent = 
        "Characters: " + comments.value.length;
});

form.addEventListener("mouseover", function(event){
    if(event.target.tagName === "INPUT" || 
       event.target.tagName === "TEXTAREA"){
        const tooltip = event.target.parentElement.nextElementSibling;
        tooltip.style.display = "block";
    }
});

form.addEventListener("mouseout", function(event){
    if(event.target.tagName === "INPUT" || 
       event.target.tagName === "TEXTAREA"){
        const tooltip = event.target.parentElement.nextElementSibling;
        tooltip.style.display = "none";
    }
});

// Form submission validation

form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const commentText = comments.value.trim();

    // Prevent submission if empty

    if(name === "" || email === "" || commentText === ""){
        message.textContent = 
        "Please fill out all fields.";

        return;
    }

    // Create new feedback entry
    const feedback = document.createElement("div");
    feedback.className = "feedback-entry";
        feedback.innerHTML =
    "<strong>" + name + "</strong>" +
    "<p>" + email + "</p>" +
    "<p>" + commentText + "</p>";

    // Add feedback to page

    feedbackDisplay.appendChild(feedback);

    // Clear form

    form.reset();
    charCount.textContent = "Characters: 0";
    message.textContent = 
    "Feedback submitted successfully!";
});

// Prevent background clicks from affecting form

document.body.addEventListener("click", function(){
    console.log("Background clicked");
});

form.addEventListener("click", function(event){
    event.stopPropagation();
});