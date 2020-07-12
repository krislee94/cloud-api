// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCheck from '../../../app/controller/check';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    check: ExportCheck;
    home: ExportHome;
    login: ExportLogin;
    user: ExportUser;
  }
}
