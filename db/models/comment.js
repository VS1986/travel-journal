const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UsersPost }) {
      this.belongsTo(UsersPost, { foreignKey: 'post_id' });
    }
  }
  Comment.init({
    commentary: DataTypes.STRING,
    post_id: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
