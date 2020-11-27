"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const NeteaseCloudMusicApi_1 = require("NeteaseCloudMusicApi");
class Home extends egg_1.Service {
    async getBannerList(type) {
        try {
            const result = await NeteaseCloudMusicApi_1.banner({
                type,
            });
            return result.body;
        }
        catch (error) {
            let msg = error.body.msg || "获取banner失败";
            this.ctx.throwBizError(msg);
        }
    }
}
exports.default = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBOEI7QUFDOUIsK0RBQThDO0FBRTlDLE1BQXFCLElBQUssU0FBUSxhQUFPO0lBQ2hDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBWTtRQUNyQyxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSw2QkFBTSxDQUFDO2dCQUMxQixJQUFJO2FBQ0wsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUM7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBQ0Y7QUFaRCx1QkFZQyJ9