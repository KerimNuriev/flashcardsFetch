const React = require('react');
const Layout = require('../views/Layout');
const Card = require('../views/Card');
const question = require('../db/models/question');

function Play({ question }) {
  return (
    <Layout>
      <Card question={question}></Card>
    </Layout>
  );
}
