// 1. Declare the function
function checkAnswer() {
    // 2. Correct answer
    const correctAnswer = "4";

    // 3. Get user's selected answer
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }
    const userAnswer = selected.value;

    // 4. Compare answers and show feedback
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// 5. Add event listener to button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
