"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const NeteaseCloudMusicApi_1 = require("NeteaseCloudMusicApi");
class Check extends egg_1.Service {
    //发送验证码
    /**
     *
     * @param param {
      "status": 1,
      "data": {
          "status": 200,
          "body": {
              "code": 200
          },
          "cookie": []
      },
      "message": "成功",
      "success": true
  }
     */
    async sendCode(param) {
        try {
            const { ctcode = "86", phone } = param;
            //校验手机号 todo 以后再写
            const result = await NeteaseCloudMusicApi_1.captcha_sent({ ctcode, phone });
            return result.body;
        }
        catch (error) {
            let msg = error.body.message;
            this.ctx.throwBizError(msg);
        }
    }
    //验证验证码
    async checkCode(param) {
        console.log(param);
        try {
            const { ctcode = '86', captcha, phone } = param;
            const res = await NeteaseCloudMusicApi_1.captcha_verify({ ctcode, phone, captcha });
            // console.log('-----',JSON.stringify(res));
            return res;
        }
        catch (error) {
            console.log('-----', JSON.stringify(error));
            let msg = error.body.message; // 错误信息
            this.ctx.throwBizError(msg);
        }
    }
}
exports.default = Check;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE4QjtBQUU5QiwrREFBbUU7QUFFbkUsTUFBcUIsS0FBTSxTQUFRLGFBQU87SUFFeEMsT0FBTztJQUNQOzs7Ozs7Ozs7Ozs7OztPQWNHO0lBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFxQjtRQUN6QyxJQUFJO1lBQ0YsTUFBTSxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLGlCQUFpQjtZQUNqQixNQUFNLE1BQU0sR0FBRyxNQUFNLG1DQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNyRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELE9BQU87SUFDQSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUs7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJO1lBQ0YsTUFBTSxFQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxHQUFHLEtBQUssQ0FBQztZQUM5QyxNQUFNLEdBQUcsR0FBRyxNQUFNLHFDQUFjLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7WUFDMUQsNENBQTRDO1lBQzVDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87WUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBQ0Y7QUE1Q0Qsd0JBNENDIn0=