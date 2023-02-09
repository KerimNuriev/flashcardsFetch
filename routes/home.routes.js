const router = require('express').Router();
const Home = require('../views/Home');
const { Topic } = require('../db/models');

router.route('/').get(async (req, res) => {
  const arrTopics = await Topic.findAll();

  res.renderComponent(Home, { arr: arrTopics });
});

module.exports = router;
