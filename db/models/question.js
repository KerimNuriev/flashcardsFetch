const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Topic }) {
      Question.belongsTo(Topic, { foreignKey: 'topicId' });
    }
  }
  Question.init(
    {
      topicId: {
        type: DataTypes.INTEGER,
        references: {
          // имя таблицы, на которую ссылается внешний ключ
          model: 'Topics',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      question: {
        type: DataTypes.TEXT,
      },
      answer: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
