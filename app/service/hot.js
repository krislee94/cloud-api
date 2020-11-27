"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const NeteaseCloudMusicApi_1 = require("NeteaseCloudMusicApi");
class HotService extends egg_1.Service {
    async HotTopic(param) {
        const { limit = 30, offset = 0 } = param;
        try {
            const result = await NeteaseCloudMusicApi_1.hot_topic({
                limit,
                offset,
            });
            return result;
        }
        catch (error) {
            this.ctx.logger.info("-------查询热门话题--------", error);
            let msg = error.body.msg || "查询热门话题失败";
            this.ctx.throwBizError(msg);
        }
    }
    //查询云村热评
    async hotWallList() {
        try {
            const result = await NeteaseCloudMusicApi_1.comment_hotwall_list({});
            return result.body;
        }
        catch (error) {
            this.ctx.logger.info("查询云村热评价：", error);
            let msg = error.body.msg || "查询云村热评失败";
            this.ctx.throwBizError(msg);
        }
    }
}
exports.default = HotService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQThCO0FBRTlCLCtEQUF1RTtBQUV2RSxNQUFxQixVQUFXLFNBQVEsYUFBTztJQUN0QyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQWlCO1FBQ3JDLE1BQU0sRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDekMsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sZ0NBQVMsQ0FBQztnQkFDN0IsS0FBSztnQkFDTCxNQUFNO2FBQ1AsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFDRCxRQUFRO0lBQ0QsS0FBSyxDQUFDLFdBQVc7UUFDdEIsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sMkNBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7Q0FDRjtBQTFCRCw2QkEwQkMifQ==