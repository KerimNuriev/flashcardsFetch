const { Question } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Question.bulkCreate([
      {
        topicId: 1,
        question: 'Как звали жену Гомера из Симпсонов?',
        answer: 'Мардж',
      },
      {
        topicId: 1,
        question: 'Как звали жену Зевса?',
        answer: 'Гера',
      },
      {
        topicId: 1,
        question:
          'Как звали прекрасную девушку, из-за которой началась Троянская война?',
        answer: 'Елена',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Question.destroy({ truncate: { cascade: true } });
  },
};
