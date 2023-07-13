const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UsersPost }) {
      this.belongsTo(UsersPost, { foreignKey: 'post_id' });
    }
  }
  File.init({
    post_id: DataTypes.BIGINT,
    file_link: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'File',
  });
  return File;
};
