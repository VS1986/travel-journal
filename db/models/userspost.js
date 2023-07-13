const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UsersPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      User, FavouritePost, Comment, File,
    }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsToMany(User, {
        through: FavouritePost,
        foreignKey: 'post_id',
      });
      this.hasMany(Comment, { foreignKey: 'post_id' });
      this.hasMany(File, { foreignKey: 'post_id' });
    }
  }
  UsersPost.init({
    user_id: DataTypes.BIGINT,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    geo_tag: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UsersPost',
  });
  return UsersPost;
};
