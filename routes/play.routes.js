const router = require('express').Router();
const Play = require('../views/Home');
const { Topic } = require('../db/models');

const { Question } = require('../db/models');

router.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const arrQuestion = await Question.findAll({
      where: { topicId: id },
      raw: true,
    });
    console.log(arrQuestion);

    res.send('ok');
  } catch (error) {
    console.log(error);
  }
  // res.renderComponent(Home, { arr: arrTopics1 });
});

module.exports = router;
