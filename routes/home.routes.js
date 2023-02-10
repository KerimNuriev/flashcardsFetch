const router = require('express').Router();
const Home = require('../views/Home');
const { Topic } = require('../db/models');

router.route('/').get(async (req, res) => {
  const arrTopics = await Topic.findAll({ raw: true });

  res.renderComponent(Home, {
    arr: arrTopics,
    step: res.app.locals.step,
  });
});

module.exports = router;
