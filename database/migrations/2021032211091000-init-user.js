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
          'user',
          {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            user_name: STRING(30),
            user_ticketId:STRING(30),
            user_password:STRING(100),
            user_unionId:STRING(20),
            user_mobile:STRING(20),
            is_vip:INTEGER,
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
