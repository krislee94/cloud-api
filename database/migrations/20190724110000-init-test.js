'use strict';
// http://docs.sequelizejs.com/manual/migrations.html
// 测试用;
module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable(
          'test',
          {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(30),
            age: INTEGER,
            created_at: DATE,
            updated_at: DATE,
          },
          { transaction: t },
        ),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('test');
  },
};
