declare module "cloud" {
  interface IUserRequestParam {
    uid: string;
    limit?: number;
    offset?: number;
  }

  interface ILimitPage {
    limit?: number;
    offset?: number;
  }

  interface IUserRecordParam {
    uid: string;
    type?: number;
  }

  interface IUserRegisterParam {
    mobile: string;
    password: string;
  }
}
