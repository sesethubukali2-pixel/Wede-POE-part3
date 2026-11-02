// JavaScript source code

// Select all FAQ questions
const faqQuestions = document.querySelectorAll(".faq-question");

// Add click functionality to each question
faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        // Find the answer belonging to this question
        const answer = question.nextElementSibling;

        // Check whether the answer is currently visible
        if (answer.style.display === "block") {

            answer.style.display = "none";
            question.querySelector("span").textContent = "+";

        } else {

            answer.style.display = "block";
            question.querySelector("span").textContent = "-";

        }

    });

});