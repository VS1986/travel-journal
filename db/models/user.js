const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UsersPost, FavouritePost }) {
      this.hasMany(UsersPost, { foreignKey: 'user_id' });
      this.belongsToMany(UsersPost, {
        through: FavouritePost,
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
