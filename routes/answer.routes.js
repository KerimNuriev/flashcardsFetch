const router = require('express').Router();
const { Question } = require('../db/models');

router.route('/').post(async (req, res) => {
  const { answer, questionId } = req.body;

  const trueAnswer = await Question.findAll({
    raw: true,
    where: { id: questionId },
  });

  if (answer === trueAnswer[0].answer) {
    res.json({ message: 'Ok' });
  } else {
    res.json({ message: 'Ne Ok' });
  }
});

module.exports = router;
