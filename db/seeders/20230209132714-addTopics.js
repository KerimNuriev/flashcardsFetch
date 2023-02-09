const { Topic } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Topic.bulkCreate([
      {
        title: 'Жёны',
      },
      {
        title: 'Еда',
      },
      {
        title: 'Море',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Topic.destroy({ truncate: { cascade: true } });
  },
};
