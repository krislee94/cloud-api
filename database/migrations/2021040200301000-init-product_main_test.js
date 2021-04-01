'use strict';
/**
 * 会员模块
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.createTable(
          'product_test',
          {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true, }, //从1000开始
            user_wechat:STRING(30),
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
