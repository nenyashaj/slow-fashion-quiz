function checkAnswers() {
    let score = 0;

    const answers = {
        q1: "correct",
        q2: "correct",
        q3: "correct",
        q4: "correct",
        q5: "correct"
    };

    for (let i = 1; i <= 5; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === answers[`q${i}`]) {
            score++;
        }
    }

    document.getElementById("result").innerText = `You scored ${score}/5!`;
}
