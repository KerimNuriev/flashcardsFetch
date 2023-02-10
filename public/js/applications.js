const form = document.querySelector('#form');
const btn = document.querySelector('#btn');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    console.log(event.target);

    const { method, action, answer } = event.target;
    const { id } = event.target.dataset;

    const res = await fetch(action, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        answer: answer.value,
        questionId: id,
      }),
    });
    const data = await res.json();
    console.log(data.message);
    if (data) {
      document.querySelector('#trueAnswer').innerHTML = data.message;
    }
  });
}
