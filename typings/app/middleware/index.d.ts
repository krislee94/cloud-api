// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBizerror from '../../../app/middleware/bizerror';

declare module 'egg' {
  interface IMiddleware {
    bizerror: typeof ExportBizerror;
  }
}
