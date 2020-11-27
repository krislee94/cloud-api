"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleMathRound = exports.RoundingMode = void 0;
/**
 * 模仿BigDecimal简单实现数值的精度计算
 * 目前只有截取和四舍五入
 */
const lodash_1 = require("lodash");
const number_precision_1 = __importDefault(require("number-precision"));
exports.RoundingMode = {
    ROUND_UP: 0,
    ROUND_DOWN: 1,
    ROUND_CEILING: 2,
    ROUND_FLOOR: 3,
    ROUND_HALF_UP: 4,
    ROUND_HALF_DOWN: 5,
    ROUND_HALF_EVEN: 6,
    ROUND_UNNECESSARY: 7,
};
class SimpleMathRound {
    constructor(number) {
        if (!lodash_1.isNumber(number)) {
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
    setScale(scale, roundingMode) {
        const { ROUND_UP, ROUND_UNNECESSARY, ROUND_DOWN, ROUND_HALF_UP } = exports.RoundingMode;
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
            return number_precision_1.default.round(number_precision_1.default.strip(Number(this.value || 0) || 0), scale);
        }
    }
}
exports.SimpleMathRound = SimpleMathRound;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC1yb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hdGgtcm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztHQUdHO0FBQ0gsbUNBQWtDO0FBQ2xDLHdFQUFrQztBQUVyQixRQUFBLFlBQVksR0FBRztJQUMxQixRQUFRLEVBQUUsQ0FBQztJQUNYLFVBQVUsRUFBRSxDQUFDO0lBQ2IsYUFBYSxFQUFFLENBQUM7SUFDaEIsV0FBVyxFQUFFLENBQUM7SUFDZCxhQUFhLEVBQUUsQ0FBQztJQUNoQixlQUFlLEVBQUUsQ0FBQztJQUNsQixlQUFlLEVBQUUsQ0FBQztJQUNsQixpQkFBaUIsRUFBRSxDQUFDO0NBQ3JCLENBQUM7QUFDRixNQUFhLGVBQWU7SUFHMUIsWUFBWSxNQUFNO1FBQ2hCLElBQUksQ0FBQyxpQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1QztRQUNELFNBQVM7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUNEOzs7O09BSUc7SUFDSSxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVk7UUFDakMsTUFBTSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLEdBQUcsb0JBQVksQ0FBQztRQUNoRixJQUFJLFlBQVksR0FBRyxRQUFRLElBQUksWUFBWSxHQUFHLGlCQUFpQixFQUFFO1lBQy9ELE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMxQztRQUNELHlCQUF5QjtRQUN6QixJQUFJLFlBQVksS0FBSyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEU7UUFDRCxpQkFBaUI7UUFDakIsOEZBQThGO1FBQzlGLElBQUksWUFBWSxLQUFLLGFBQWEsRUFBRTtZQUNsQywrR0FBK0c7WUFDL0cseUVBQXlFO1lBQ3pFLE9BQU8sMEJBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0NBQ0Y7QUFyQ0QsMENBcUNDIn0=