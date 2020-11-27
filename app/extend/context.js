"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_round_1 = require("../lib/math-round"); //数字精准度计算
const is_type_of_1 = __importDefault(require("is-type-of"));
exports.default = {
    get ctx() {
        return this;
    },
    get roundingMode() {
        return math_round_1.RoundingMode;
    },
    //抛错
    throwBizError(err) {
        const bizError = new Error(err);
        throw bizError;
    },
    responseBizError(err) {
        if (!is_type_of_1.default.error(err)) {
            return;
        }
        console.log('---- 错误 ------', err);
        this.ctx.response.failure(err.message);
    },
    setScale(number, scale, roundingMode) {
        const roundNumber = new math_round_1.SimpleMathRound(number);
        return roundNumber.setScale(scale, roundingMode);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxrREFBa0UsQ0FBQyxTQUFTO0FBQzVFLDREQUE0QjtBQUU1QixrQkFBZTtJQUNiLElBQUksR0FBRztRQUNMLE9BQVEsSUFBdUIsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxZQUFZO1FBQ2QsT0FBTyx5QkFBWSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxJQUFJO0lBQ0osYUFBYSxDQUFDLEdBQUc7UUFDZixNQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLFFBQVEsQ0FBQztJQUNqQixDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsR0FBbUI7UUFDbEMsSUFBSSxDQUFDLG9CQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUMsR0FBRyxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsUUFBUSxDQUFDLE1BQWMsRUFBRSxLQUFhLEVBQUUsWUFBb0I7UUFDMUQsTUFBTSxXQUFXLEdBQUcsSUFBSSw0QkFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUMifQ==