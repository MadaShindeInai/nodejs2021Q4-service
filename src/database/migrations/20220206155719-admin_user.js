'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John',
          login: 'admin',
          password:
            '$2b$10$ENenM33Q6ufPAfrydJCsp.irP15rYnMgYzDFiBc8ZEyrvfFQjyRE2',
          id: 'a2193b13-af16-4f13-9f9c-0b082f1c14e1',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'users',
      { id: 'a2193b13-af16-4f13-9f9c-0b082f1c14e1' },
      {}
    );
  },
};
