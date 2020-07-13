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
}
