document.addEventListener("DOMContentLoaded", function () {
  // Get all the question containers
  const questions = document.querySelectorAll(".question");

  // Initialize the currently expanded question
  let currentExpanded = null;

  // Loop through each question container
  questions.forEach(function (question) {
    // Get the question heading, arrow icon, and answer within the current question container
    const heading = question.querySelector("h3");
    const arrow = question.querySelector(".arrow");
    const answer = question.querySelector(".answer");

    // Function to toggle the answer's visibility, arrow rotation, and heading font weight
    function toggleAnswer() {
      if (currentExpanded === question) {
        // Collapse the currently expanded question
        answer.style.display = "none";
        heading.style.fontWeight = "400";
        arrow.style.transform = "rotate(0deg)";
        currentExpanded = null;
      } else {
        // Collapse the previously expanded question
        if (currentExpanded) {
          const expandedAnswer = currentExpanded.querySelector(".answer");
          const expandedHeading = currentExpanded.querySelector("h3");
          const expandedArrow = currentExpanded.querySelector(".arrow");
          expandedAnswer.style.display = "none";
          expandedHeading.style.fontWeight = "400";
          expandedArrow.style.transform = "rotate(0deg)";
        }

        // Expand the clicked question
        answer.style.display = "block";
        heading.style.fontWeight = "700";
        arrow.style.transform = "rotate(180deg)";
        currentExpanded = question;
      }
    }

    // Add click event listener to the question heading
    heading.addEventListener("click", toggleAnswer);

    // Add click event listener to the arrow icon
    arrow.addEventListener("click", toggleAnswer);
  });
});
