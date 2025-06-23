document.addEventListener("DOMContentLoaded", () => {
  const jokeBtn = document.getElementById("jokeBtn");
  const questionElem = document.getElementById("question");
  const answerElem = document.getElementById("answer");

  jokeBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("https://carambar-api-436f.onrender.com/api/blagues/random");
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