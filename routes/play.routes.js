const router = require('express').Router();

const Play = require('../views/Play');

const { Question } = require('../db/models');

router.route('/:id/:qid').get(async (req, res) => {
  const { id } = req.params;
  const { qid } = req.params;
  const arrQuestion = await Question.findAll({
    where: { topicId: id },
  });
  const needQuestion = arrQuestion[qid];

  res.renderComponent(Play, { question: needQuestion });
});

module.exports = router;
