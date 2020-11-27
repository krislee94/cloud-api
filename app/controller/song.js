"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class Song extends egg_1.Controller {
    /**
     * 心动模式、智能播放
     */
    async getAISong() {
        //开启心动模式
        // this.ctx.validate({
        //   pid: { type: "string", required: false }, // 歌单id
        //   id: { type: "string", required: false }, //歌曲id
        //   sid: { type: "string", required: false }, //要开始播放的歌曲id
        // });
        console.log(this.ctx.request.body);
        const result = await this.ctx.service.song.getAISong(Object.assign({}, this.ctx.request.body));
        this.ctx.response.success(result);
    }
}
exports.default = Song;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29uZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBaUM7QUFFakMsTUFBcUIsSUFBSyxTQUFRLGdCQUFVO0lBQzFDOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFNBQVM7UUFDcEIsUUFBUTtRQUNSLHNCQUFzQjtRQUN0QixzREFBc0Q7UUFDdEQsb0RBQW9EO1FBQ3BELDJEQUEyRDtRQUMzRCxNQUFNO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLG1CQUMvQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ3hCLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBbEJELHVCQWtCQyJ9