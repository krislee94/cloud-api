/**
 * 模仿BigDecimal简单实现数值的精度计算
 * 目前只有截取和四舍五入
 */
import { isNumber } from 'lodash';
import NP from 'number-precision';

export const RoundingMode = {
  ROUND_UP: 0,
  ROUND_DOWN: 1,
  ROUND_CEILING: 2,
  ROUND_FLOOR: 3,
  ROUND_HALF_UP: 4,
  ROUND_HALF_DOWN: 5,
  ROUND_HALF_EVEN: 6,
  ROUND_UNNECESSARY: 7,
};
export class SimpleMathRound {
  value: string;
  original: number;
  constructor(number) {
    if (!isNumber(number)) {
      throw new Error('Invalid rounding number');
    }
    // 转换成字符串
    this.value = `${number}`;
    this.original = number;
  }
  /**
   * 根据roundMode计算值
   * @param  scale scale of the value to be returned.
   * @param roundingMode The rounding mode to apply.
   */
  public setScale(scale, roundingMode) {
    const { ROUND_UP, ROUND_UNNECESSARY, ROUND_DOWN, ROUND_HALF_UP } = RoundingMode;
    if (roundingMode < ROUND_UP || roundingMode > ROUND_UNNECESSARY) {
      throw new Error('Invalid rounding mode');
    }
    // 直接删除多余的小数位，如2.35会变成2.3
    if (roundingMode === ROUND_DOWN) {
      let [int, decimal = ''] = this.value.split('.');
      if (decimal) {
        decimal = decimal.slice(0, scale);
      }
      return decimal ? parseFloat(`${int}.${decimal}`) : parseFloat(int);
    }
    // 四舍五入，2.35变成2.4
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round
    if (roundingMode === ROUND_HALF_UP) {
      // @ts-ignore, 下面这个也有问题： eg. Math.round(+(39.98*1.75-7.01) + 'e' + 2)/Math.pow(10,2) = 62.95499999.... => 62.95
      // return Math.round(+this.original + 'e' + scale) / Math.pow(10, scale);
      return NP.round(NP.strip(Number(this.value || 0) || 0), scale);
    }
  }
}
