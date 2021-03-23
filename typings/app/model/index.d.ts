// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCloudUser from '../../../app/model/CloudUser';

declare module 'egg' {
  interface IModel {
    CloudUser: ReturnType<typeof ExportCloudUser>;
  }
}
