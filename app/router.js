"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {Egg.Application} app - egg application
 */
exports.default = (app) => {
    const { controller, router } = app;
    //初始化
    router.get("/", controller.home.index);
    //-------------------------- 公共部分 ---------------------------------
    //获取banner(首页banner图)
    router.post("/banner", controller.home.getBannerList);
    //--------------------------- 登录接口 -------------------------------------
    //登录login的接口
    router.post("/login/user", controller.login.loginIn);
    //获取登录状态 !!! 这个接口有问题一直返回301 （禁用）
    router.get("/login/status", controller.login.loginStatus);
    //刷新登录接口
    router.post("/login/refresh", controller.login.refreshStatus);
    //---------------------------- 验证码 ----------------------------
    // 发送验证码
    router.post("/send/code", controller.check.sendCode);
    //校验验证码
    router.post("/check/code", controller.check.checkCode);
    //-----------------------------  用户 ----------------------------
    //用户详情
    router.post("/user/detail", controller.user.queryDetail);
    //获取用户歌单
    router.post("/user/play/list", controller.user.queryUserPlayList);
    //更新用户订单（用户登录之后更新）
    router.post("/user/play/list/update", controller.user.userPlayListUpdate);
    //获取用户信息 , 歌单，收藏，mv, dj 数量(301)
    router.get("/user/play/subcount", controller.user.getUserInfoAndNumer);
    //获取用户电台
    router.post("/user/dj", controller.user.queryUserDJ);
    //获取用户粉丝列表
    router.post("/user/followeds", controller.user.queryUserFolloweds);
    //获取用户关注列表
    router.post("/user/follow", controller.user.queryUserFollower);
    //获取用户动态
    router.post("/user/event", controller.user.queryUserEvent);
    //转发用户动态
    router.post("/user/forward", controller.user.forwardUserEvent);
    //获取用户播放记录
    router.post("/user/record", controller.user.getUserRecord);
    // ------------------------ 热门话题，热评等 ----------------------------
    //查询热门话题 （301）
    router.post("/hot/topic", controller.hot.HotTopic);
    //获取云村热评
    router.get("/hotwall/list", controller.hot.hotWallList);
    //------------------------- 心动模式 --------------------------------
    //心动模式&智能播放(500)
    router.post("/playmode/intelligence/list", controller.song.getAISong);
    //--------------------------- 歌手 ------------------------------------
    //歌手分类列表
    router.post("/player/artist/list", controller.player.getArtistList);
    //收藏取消 收藏歌手
    router.post("/artist/sub", controller.player.artistSub);
    //歌手热门50首歌曲
    router.post("/artist/top/song", controller.player.artistTopSong);
    //获取歌手全部歌曲
    router.post("/artist/songs", controller.player.getArtistSubList);
    //收藏歌手列表
    router.post("/artist/sublist", controller.player.getArtistSubSong);
    //--------------------------- 歌单 ------------------------------
    //获取推荐歌单
    router.post("/personalized", controller.personalized.getPersonalizeList);
    //推荐mv
    router.get("/personalized/mv", controller.personalized.getPersonalizedMVList);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0dBRUc7QUFDSCxrQkFBZSxDQUFDLEdBQWdCLEVBQUUsRUFBRTtJQUNsQyxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNuQyxLQUFLO0lBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxtRUFBbUU7SUFDbkUscUJBQXFCO0lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsd0VBQXdFO0lBQ3hFLFlBQVk7SUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELGdDQUFnQztJQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELFFBQVE7SUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFFOUQsK0RBQStEO0lBQy9ELFFBQVE7SUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELE9BQU87SUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXZELGdFQUFnRTtJQUNoRSxNQUFNO0lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJ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