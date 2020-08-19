// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCheck from '../../../app/service/check';
import ExportHome from '../../../app/service/home';
import ExportHot from '../../../app/service/hot';
import ExportLogin from '../../../app/service/login';
import ExportPersonalized from '../../../app/service/personalized';
import ExportPlayer from '../../../app/service/player';
import ExportSong from '../../../app/service/song';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    check: AutoInstanceType<typeof ExportCheck>;
    home: AutoInstanceType<typeof ExportHome>;
    hot: AutoInstanceType<typeof ExportHot>;
    login: AutoInstanceType<typeof ExportLogin>;
    personalized: AutoInstanceType<typeof ExportPersonalized>;
    player: AutoInstanceType<typeof ExportPlayer>;
    song: AutoInstanceType<typeof ExportSong>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
