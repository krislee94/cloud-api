"use strict";
/**
 * 商品模块
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, DECIMAL } = Sequelize;
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.createTable(
          "product_main",
          {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true }, //从1000开始
            spuId: { type: STRING(11), field: "spu_id", allowNull: false },
            adminId: {
              type: STRING,
              field: "admin_id",
              allowNull: false,
              comment: "店铺id",
            },
            productName: {
              type: STRING(50),
              field: "product_name",
              allowNull: false,
            },
            delFlag: {
              type: INTEGER,
              field: "del_flag",
              allowNull: false,
              comment: "0:正常，1逻辑删除，2物理删除",
            },
            img: {
              type: STRING,
              field: "img",
              allowNull: true,
              comment: "商品主图",
            },
            price: {
              type: DECIMAL(10, 2),
              field: "price",
              allowNull: false,
              comment: "售价",
            },
            cost: {
              type: DECIMAL(10, 2),
              field: "cost",
              allowNull: true,
              comment: "成本价",
            },
            stock: {
              type: INTEGER,
              field: "stock",
              allowNull: true,
              comment: "库存",
            },
            place: {
              type: STRING,
              field: "place",
              allowNull: true,
              comment: "产地",
            },
            unitId: {
              type: STRING,
              field: "unit_id",
              allowNull: true,
              comment: "单位id",
            },
            unit: {
              type: STRING,
              field: "unit",
              allowNull: false,
              comment: "单位",
            },
            cid: {
              type: INTEGER,
              field: "cid",
              allowNull: false,
              comment: "分类id",
            },
            cName: {
              type: STRING,
              field: "c_name",
              allowNull: false,
              comment: "分类名称",
            },
            createdTime: {
              type: DATE,
              field: "create_time",
              allowNull: false,
              comment: "创建时间",
            },
            updateTime: {
              type: DATE,
              field: "update_time",
              allowNull: false,
              comment: "更新时间",
            },
          },
          { transaction: t }
        ),
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("product_main");
  },
};
