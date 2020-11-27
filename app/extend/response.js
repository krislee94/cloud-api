"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    get resp() {
        return this;
    },
    failure(err) {
        const body = { status: -1, data: null, message: "", success: false };
        body.message = err;
        this.resp.body = body;
    },
    //设置统一的返回格式
    success(data = null) {
        this.resp.body = { status: 1, data, message: "成功", success: true };
    },
    //会话过期
    logout(errMsg, code = -9) {
        this.resp.body = {
            status: code,
            data: null,
            message: errMsg || "会话过期，请重新登录",
            success: true,
        };
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlO0lBQ2IsSUFBSSxJQUFJO1FBQ04sT0FBUSxJQUF3QixDQUFDO0lBQ25DLENBQUM7SUFDRCxPQUFPLENBQUMsR0FBb0I7UUFDMUIsTUFBTSxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNELFdBQVc7SUFDWCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsTUFBTTtJQUNOLE1BQU0sQ0FBQyxNQUFjLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRztZQUNmLE1BQU0sRUFBRSxJQUFJO1lBQ1osSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsTUFBTSxJQUFJLFlBQVk7WUFDL0IsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMifQ==