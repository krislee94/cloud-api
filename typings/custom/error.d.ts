import { PlainObject, PlainObject } from 'egg';

declare module 'cloud' {
  interface IThrowBizError extends Error, PlainObject {
    isBizError?: boolean;
  }
}
