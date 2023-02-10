const React = require('react');

function Card({ question }) {
  return (
    <div>
      <h1> {question.question} </h1>
      <form id="form" action="/answer" method="post" data-id={question.id}>
        <input type="text" name="answer" placeholder="Ваш ответ" />
        <button type="submit" id="btn">
          Узнать ответ
        </button>
      </form>
      <p id="trueAnswer" />
      <button id="btn">Next</button>
    </div>
  );
}

module.exports = Card;
