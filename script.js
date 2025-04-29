// Self-validating form
document.getElementById('contact-form').addEventListener('submit', function (e) {
    let valid = true;

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(function (msg) {
        msg.style.display = 'none';
    });

    // Get form values
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    // Check if name is empty
    if (name.value.trim() === '') {
        document.getElementById('name-error').style.display = 'block';
        valid = false;
    }

    // Check if email is empty and valid
    if (email.value.trim() === '') {
        document.getElementById('email-error').style.display = 'block';
        valid = false;
    } else if (!validateEmail(email.value)) {
        document.getElementById('email-invalid').style.display = 'block';
        valid = false;
    }

    // Prevent form submission if validation fails
    if (!valid) {
        e.preventDefault();
    }
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}


// Self-correcting quiz
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let score = 0;

    // Answer key for the quiz (just one question in this case)
    const correctAnswers = {
        'question1': 'coffee'
    };

    // Get user answer
    const userAnswer = document.querySelector('input[name="question1"]:checked');

    if (userAnswer) {
        const userAnswerValue = userAnswer.value;
        
        // Check if the answer is correct
        if (userAnswerValue === correctAnswers['question1']) {
            score++;
            document.getElementById('quiz-feedback').textContent = 'Correct! You got the right answer.';
            document.getElementById('quiz-feedback').style.color = 'green';
        } else {
            document.getElementById('quiz-feedback').textContent = 'Oops! That\'s incorrect. The correct answer is coffee.';
            document.getElementById('quiz-feedback').style.color = 'red';
        }
    } else {
        document.getElementById('quiz-feedback').textContent = 'Please select an answer!';
        document.getElementById('quiz-feedback').style.color = 'orange';
    }

    // Display the score
    document.getElementById('score').textContent = `Your score: ${score}`;
});

// Handle form submission and check answers
// Function to handle answer selection and apply auto-correction
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
  
    let score = 0;
  
    // Check answers for each question
    if (document.querySelector('input[name="q1"]:checked')?.value === 'a') {
      score++; // Correct answer for q1
    }
    if (document.querySelector('input[name="q2"]:checked')?.value === 'b') {
      score++; // Correct answer for q2
    }
    if (document.querySelector('input[name="q3"]:checked')?.value === 'a') {
      score++; // Correct answer for q3
    }
  
    // Prepare the result text
    let resultText = `You got ${score} out of 3 correct.`;
  
    // Show the result section
    const resultSection = document.getElementById('quiz-result');
    resultSection.style.display = 'block'; // Make the result section visible
  
    // Set the result text dynamically
    document.getElementById('result-text').textContent = resultText;
  
    // Optionally, hide the quiz form after submission
    document.getElementById('quiz-form').style.display = 'none'; // Hide the form after submission
});

// Smooth Scrolling Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action (jump to the section)

        // Get the target section's id from the href attribute
        const targetId = link.getAttribute('href').substring(1); // Remove '#' from the href
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section with smooth animation
        targetSection.scrollIntoView({
            behavior: 'smooth' // Ensure smooth scrolling
        });
    });
});
 // Select all sections or elements you want to fade in
        const fadeElements = document.querySelectorAll('.fade-in');

        // Function to check if an element is in view
        function isInView(element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }

        // Listen for the scroll event
        window.addEventListener('scroll', function() {
            fadeElements.forEach(function(element) {
                // If element is in view, add 'visible' class to trigger fade-in
                if (isInView(element)) {
                    element.classList.add('visible');
                }
            });
        });

        // Optionally, trigger the fade-in on page load for elements already in view
        document.addEventListener('DOMContentLoaded', function() {
            fadeElements.forEach(function(element) {
                if (isInView(element)) {
                    element.classList.add('visible');
                }
            });
        });

        // Smooth Scrolling Navigation
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default action (jump to the section)

                // Get the target section's id from the href attribute
                const targetId = link.getAttribute('href').substring(1); // Remove '#' from the href
                const targetSection = document.getElementById(targetId);

                // Scroll to the target section with smooth animation
                targetSection.scrollIntoView({
                    behavior: 'smooth' // Ensure smooth scrolling
                });
            });
        });