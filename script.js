const jokeBtn = document.getElementById('jokeBtn');
const question = document.getElementById('question');
const answer = document.getElementById('answer');

jokeBtn.addEventListener('click', async () => {
  const res = await fetch('https://your-backend-url/blagues/random');
  const joke = await res.json();
  question.textContent = joke.question;
  answer.textContent = joke.answer;
});
