// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCheck from '../../../app/controller/check';
import ExportHome from '../../../app/controller/home';
import ExportHot from '../../../app/controller/hot';
import ExportLogin from '../../../app/controller/login';
import ExportPlayer from '../../../app/controller/player';
import ExportSong from '../../../app/controller/song';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    check: ExportCheck;
    home: ExportHome;
    hot: ExportHot;
    login: ExportLogin;
    player: ExportPlayer;
    song: ExportSong;
    user: ExportUser;
  }
}
