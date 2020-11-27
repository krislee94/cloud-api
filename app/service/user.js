"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const NeteaseCloudMusicApi_1 = require("NeteaseCloudMusicApi");
class User extends egg_1.Service {
    async queryDetail(param) {
        try {
            const { uid } = param;
            const result = await NeteaseCloudMusicApi_1.user_detail({ uid });
            console.log("----", result);
            if (result && result.status == 200) {
                return result.body;
            }
            else {
                this.ctx.throwBizError("请求错误");
            }
        }
        catch (error) {
            console.log("------", error);
            let code = error.body.code; //直接返回错误码
            this.ctx.throwBizError(code);
        }
    }
    /**
     *
     * @param param
     * uid
     * limit 默认30 相当于 pageSize
     * offset 默认0 相当于 pageNum
     */
    async queryUserPlayList(param) {
        try {
            const result = await NeteaseCloudMusicApi_1.user_playlist(param);
            return result.body;
        }
        catch (error) {
            let msg = error.body.msg || "查询用户信息错误";
            this.ctx.throwBizError(msg);
        }
    }
    /**
     * 更新用户播放列表
     */
    async userPlayListUpdate(param) {
        const { uid } = param;
        try {
            const result = await NeteaseCloudMusicApi_1.playlist_update({
                id: uid,
            });
            return result.body;
        }
        catch (error) {
            console.log(error);
            let msg = error.body.msg || "更新用户列表失败";
            this.ctx.throwBizError(msg);
        }
    }
    /**
     * 更新用户mv，dj等数量
     * (301)
     */
    async getUserInfoAndNumer() {
        try {
            const result = await NeteaseCloudMusicApi_1.user_subcount({});
            return result.body;
        }
        catch (error) {
            console.log(error);
            let code = error.body.code;
            this.ctx.throwBizError(code);
            this.ctx.logger.info(error);
        }
    }
    /**
     * 获取用户DJ列表
     */
    async queryUserDJ(param) {
        console.log(param);
        try {
            const result = await NeteaseCloudMusicApi_1.user_dj(param);
            return result.body;
        }
        catch (error) {
            this.ctx.logger.info("----查询用户DJ列表错误----", error);
            let msg = error.body.msg || "查询用户DJ列表错误";
            this.ctx.throwBizError(msg);
        }
    }
    /**
     * 获取用户粉丝列表
     */
    async queryUserFolloweds(param) {
        try {
            const { uid, limit = 30 } = param;
            const result = await NeteaseCloudMusicApi_1.user_followeds({
                uid,
                limit,
            });
            return result.body;
        }
        catch (error) {
            this.ctx.logger.info("------查询用户粉丝列表失败------", error);
            let msg = error.body.msg || "查询用户粉丝列表失败";
            this.ctx.throwBizError(msg);
        }
    }
    /**
     * 获取用户关注列表
     */
    async queryUserFollower(param) {
        try {
            const { uid, limit = 30 } = param;
            const result = await NeteaseCloudMusicApi_1.user_follows({
                uid,
                limit,
            });
            return result.body;
        }
        catch (error) {
            this.ctx.logger.info("-----查询用户关注列表-------", error);
            let msg = error.body.msg || "查询用户关注列表失败";
            this.ctx.throwBizError(msg);
        }
    }
    /**
     * 获取用户动态
     * 返回的参数 --- type参数对应
     * 18 分享单曲
     * 19 分享专辑
     * 17、28 分享电台节目
     * 22 转发
     * 39 发布视频
     * 35、13 分享歌单
     * 24 分享专栏文章
     * 41、21 分享视频
     */
    async queryUserEvent(param) {
        const { uid, limit = 30 } = param;
        try {
            const result = await NeteaseCloudMusicApi_1.user_event({
                uid,
                limit,
            });
            return result.body;
        }
        catch (error) {
            this.ctx.logger.info("------查询用户动态失败------", error);
            let msg = error.body.msg || "查询用户动态失败";
            this.ctx.throwBizError(msg);
        }
    }
    /**
     * 转发用户动态
     */
    async forwardUserEvent(param) {
        const { evId, uid, forwards = "" } = param;
        try {
            const result = await NeteaseCloudMusicApi_1.event_forward({
                evId,
                uid,
                forwards,
            });
            return result.body;
        }
        catch (error) {
            this.ctx.logger.info("--------转发用户动态失败-------", error);
            let msg = error.body.msg || "转发用户动态失败";
            this.ctx.throwBizError(msg);
        }
    }
    /**
     * 获取用户播放记录
     */
    async getUserRecord(param) {
        const { uid, type = 1 } = param;
        try {
            const result = await NeteaseCloudMusicApi_1.user_record({
                uid,
                type,
            });
            return result;
        }
        catch (error) {
            this.ctx.logger.info(`查询失败${error}`);
            let msg = error.body.msg || "查询用户播放记录失败";
            this.ctx.throwBizError(msg);
        }
    }
}
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBOEI7QUFDOUIsK0RBVzhCO0FBRzlCLE1BQXFCLElBQUssU0FBUSxhQUFPO0lBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBd0I7UUFDL0MsSUFBSTtZQUNGLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDdEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxrQ0FBVyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtnQkFDbEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUztZQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBd0I7UUFDckQsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sb0NBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENB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