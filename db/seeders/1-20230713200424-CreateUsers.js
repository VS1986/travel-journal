/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      fullName: 'VS',
      email: '1',
      login: '1',
      password: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      fullName: 'VF',
      email: '2',
      login: '2',
      password: '2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
