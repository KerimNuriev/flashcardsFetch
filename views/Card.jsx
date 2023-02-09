const React = require('react');

function Card({ question }) {
  return (
    <div>
      <h1> {question} </h1>
      <form id="form" action="/answer" method="post">
        <input type="text" name="answer" placeholder="Ваш ответ" />
        <button id="btn"> Узнать ответ </button>
      </form>
      <h2> answer </h2>
      <button>Next</button>
    </div>
  );
}

module.exports = Card;
