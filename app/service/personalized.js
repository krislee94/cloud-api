"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const NeteaseCloudMusicApi_1 = require("NeteaseCloudMusicApi");
class personalizedService extends egg_1.Service {
    async getPersonalizeList(param) {
        try {
            const { limit = 30 } = param;
            const result = await NeteaseCloudMusicApi_1.personalized({
                limit,
            });
            return result.body;
        }
        catch (error) {
            let msg = error.msg || "获取推荐列表失败";
            this.ctx.throwBizError(msg);
        }
    }
    //获取推荐的MV
    async getPersonalizedMVList() {
        try {
            const result = await NeteaseCloudMusicApi_1.personalized_mv();
            return result.body;
        }
        catch (error) {
            let msg = error.msg || "获取推荐MV失败";
            this.ctx.throwBizError(msg);
        }
    }
}
exports.default = personalizedService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uYWxpemVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQThCO0FBQzlCLCtEQUFxRTtBQUdyRSxNQUFxQixtQkFBb0IsU0FBUSxhQUFPO0lBQy9DLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFnQztRQUM5RCxJQUFJO1lBQ0YsTUFBTSxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDN0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxtQ0FBWSxDQUFDO2dCQUNoQyxLQUFLO2FBQ04sQ0FBQyxDQUFDO1lBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxTQUFTO0lBQ0YsS0FBSyxDQUFDLHFCQUFxQjtRQUNoQyxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxzQ0FBZSxFQUFFLENBQUM7WUFDdkMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7Q0FDRjtBQXhCRCxzQ0F3QkMifQ==