const jokeBtn = document.getElementById('jokeBtn');
const question = document.getElementById('question');
const answer = document.getElementById('answer');

jokeBtn.addEventListener('click', async () => {
  const res = await fetch('https://your-backend-url/blagues/random');
  const joke = await res.json();
  question.textContent = joke.question;
  answer.textContent = joke.answer;
});

document.addEventListener("DOMContentLoaded", () => {
    const jokeBtn = document.getElementById("jokeBtn");
    const questionElem = document.getElementById("question");
    const answerElem = document.getElementById("answer");

    jokeBtn.addEventListener("click", async () => {
        try {
            const response = await fetch("http://localhost:3000/blagues/random");
            if (!response.ok) throw new Error("Erreur lors de la récupération de la blague");
            const joke = await response.json();
            questionElem.textContent = joke.question;
            answerElem.textContent = joke.answer;
        } catch (error) {
            questionElem.textContent = "Erreur : impossible de charger une blague";
            answerElem.textContent = "";
        }
    });
});