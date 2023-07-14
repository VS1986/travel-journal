/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UsersPosts', [{
      user_id: null,
      title: 'Trip to London',
      description: 'How we made a trip to London',
      geo_tag: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: null,
      title: 'Trip to Moscow',
      description: 'How we made a trip to Moscow',
      geo_tag: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: null,
      title: 'Trip to New York',
      description: 'How we made a trip to New York',
      geo_tag: null,
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
