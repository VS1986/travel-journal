const { sequelize } = require('./models');

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log('База данных подключена успешно');
  } catch (error) {
    console.log('Ошибка подклчения базы данных', error.message);
  }
};
