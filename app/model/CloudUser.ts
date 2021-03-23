import { Application } from "egg";

/**
 * 日结记录表。
 */
export default (app: Application) => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const CloudUser = app.model.define(
    "user",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      userName: {
        type: STRING(30),
        field: "user_name",
        allowNull: true,
        comment: "用户名称",
      },
      userTicketId: {
        type: STRING(30),
        field: "user_ticketId",
        allowNull: true,
        comment: "用户id的唯一标识",
      },
      userPassword: {
        type: STRING(100),
        field: "user_password",
        allowNull: false,
        comment: "用户密码md5加密",
      },
      userUnionId: {
        type: STRING(20),
        field: "user_unionId",
        allowNull: true,
        comment: "用户关联微信unionId",
      },
      userMobile: {
        type: STRING(20),
        field: "user_mobile",
        allowNull: true,
        comment: "用户手机号",
      },
      isVIP: {
        type: INTEGER,
        field: "is_vip",
        allowNull: false,
        defaultValue: 0,
        comment: "是否是vip用户",
      },
      userWeChat: {
        type: STRING(30),
        field: "user_wechat",
        allowNull: true,
        comment: "用户关联微信账户",
      },
      createTime: {
        type: DATE,
        field: "created_at",
        allowNull: true,
        comment: "创建时间",
      },
      updateTime: {
        type: DATE,
        field: "updated_at",
        allowNull: true,
        comment: "更新时间",
      },
    },
    {
      tableName: "user",
      underscored: true,
    }
  );
  // return class extends CloudUser {};
  return class extends CloudUser {};
};
