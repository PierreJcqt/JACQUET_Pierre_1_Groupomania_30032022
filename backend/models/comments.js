'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Comments.belongsTo(models.User, { foreignKey: 'userId' })
      Comments.belongsTo(models.Post, { foreignKey: 'postId' })
    }
  }
  Comments.init(
    {
      postId: DataTypes.INTEGER,
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Comments'
    }
  )

  return Comments;
}