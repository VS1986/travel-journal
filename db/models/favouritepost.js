const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FavouritePost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FavouritePost.init({
    user_id: DataTypes.BIGINT,
    post_id: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'FavouritePost',
  });
  return FavouritePost;
};
