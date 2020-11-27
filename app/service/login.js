"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const NeteaseCloudMusicApi_1 = require("NeteaseCloudMusicApi");
class Login extends egg_1.Service {
    /**
     * 登录接口
     * @param param
     */
    async loginIn(param) {
        //调用NeteaseCloudMusicApi
        const result = await NeteaseCloudMusicApi_1.login_cellphone(param);
        console.log(result);
        if (result && result.body && result.body.cookie) {
            //校验result.body;返回凭证给前端
            const res = await NeteaseCloudMusicApi_1.user_cloud({
                cookie: result.body.cookie,
            });
            if (res.status !== 200 && res.body.code !== 200) {
                this.ctx.throwBizError(res.body.msg || "认证过期，请重新登录");
            }
            return result.body;
        }
        else {
            this.ctx.throwBizError(result.body.msg);
        }
    }
    /**
     * 刷新登录接口
     */
    async refreshStatus() {
        const result = await NeteaseCloudMusicApi_1.login_refresh();
        if (result && result.status === 200) {
            return result;
        }
        else {
            this.ctx.throwBizError(result.body.msg);
        }
    }
    /**
     * 获取登录状态
     */
    async loginStatus() {
        try {
            // cookie = this.ctx.request.header.cookie
            const result = await NeteaseCloudMusicApi_1.login_status({});
            return result;
        }
        catch (error) {
            console.log('--------', JSON.stringify(error));
            let code = error.body.code;
            this.ctx.throwBizError(code);
        }
    }
}
exports.default = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE4QjtBQUU5QiwrREFLOEI7QUFFOUIsTUFBcUIsS0FBTSxTQUFRLGFBQU87SUFDeEM7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFrQjtRQUNyQyx3QkFBd0I7UUFDeEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxzQ0FBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMvQyx1QkFBdUI7WUFDdkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxpQ0FBVSxDQUFDO2dCQUMzQixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQzNCLENBQUMsQ0FBQztZQUNILElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFO2dCQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUMsQ0FBQzthQUN0RDtZQUNELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztTQUNwQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxhQUFhO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLE1BQU0sb0NBQWEsRUFBRSxDQUFDO1FBRXJDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ25DLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsV0FBVztRQUN0QixJQUFJO1lBQ0YsMENBQTBDO1lBQzFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sbUNBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QyxPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7WUFDN0MsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0NBQ0Y7QUFsREQsd0JBa0RDIn0=