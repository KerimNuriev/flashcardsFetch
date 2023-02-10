const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');
const question = require('../db/models/question');

function Play({ question }) {
  return (
    <Layout>
      <div className="card">
        <Card question={question} />
      </div>
    </Layout>
  );
}

module.exports = Play;
