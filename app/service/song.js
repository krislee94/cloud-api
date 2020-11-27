"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const NeteaseCloudMusicApi_1 = require("NeteaseCloudMusicApi");
class Song extends egg_1.Service {
    async getAISong(param) {
        try {
            //   const { id = "", pid = "", sid = "" } = param;
            //   console.log("-------------", param);
            //   let obj = {
            //     songId: id,
            //     type: "fromPlayOne",
            //     palylistId: pid,
            //     startMusicId: sid || id,
            //     count: 1,
            //   };
            //   const result = this.ctx.curl(
            //     `http://music.163.com/weapi/playmode/intelligence/list`,
            //     {
            //       method: "POST",
            //       data: obj,
            //       auth: this.ctx.request.header.Cookie,
            //     }
            //   );
            //   console.log(result);
            //   return result;
            const result = await NeteaseCloudMusicApi_1.playmode_intelligence_list(param);
            return result.body;
        }
        catch (error) {
            this.ctx.logger.info("开启心动模式失败", error);
            let msg = error.body.msg || "开启心动模式失败";
            this.ctx.throwBizError(msg);
        }
    }
}
exports.default = Song;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29uZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBOEI7QUFFOUIsK0RBQWtFO0FBQ2xFLE1BQXFCLElBQUssU0FBUSxhQUFPO0lBQ2hDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBbUI7UUFDeEMsSUFBSTtZQUNGLG1EQUFtRDtZQUNuRCx5Q0FBeUM7WUFDekMsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQiwyQkFBMkI7WUFDM0IsdUJBQXVCO1lBQ3ZCLCtCQUErQjtZQUMvQixnQkFBZ0I7WUFDaEIsT0FBTztZQUNQLGtDQUFrQztZQUNsQywrREFBK0Q7WUFDL0QsUUFBUTtZQUNSLHdCQUF3QjtZQUN4QixtQkFBbUI7WUFDbkIsOENBQThDO1lBQzlDLFFBQVE7WUFDUixPQUFPO1lBRVAseUJBQXlCO1lBQ3pCLG1CQUFtQjtZQUNuQixNQUFNLE1BQU0sR0FBRyxNQUFNLGlEQUEwQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBQ0Y7QUEvQkQsdUJBK0JDIn0=