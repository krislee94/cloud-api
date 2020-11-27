"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const NeteaseCloudMusicApi_1 = require("NeteaseCloudMusicApi");
class Player extends egg_1.Service {
    /**
     * 查询歌手分类
     * @param param
     */
    async getArtistList(param) {
        try {
            const result = await NeteaseCloudMusicApi_1.artist_list(param);
            return result.body;
        }
        catch (error) {
            let msg = error.body.msg || "查询歌手分类接口失败";
            this.ctx.throwBizError(msg);
        }
    }
    //收藏与取消收藏歌手
    async artistSub(param) {
        //
        const { artistId: id } = param;
        try {
            const result = await NeteaseCloudMusicApi_1.artist_sub({
                id,
            });
            return result.body;
        }
        catch (error) {
            let msg = error.body.msg || "收藏取消歌手";
            this.ctx.throwBizError(msg);
        }
    }
    //查询热门歌手50首单曲
    async artistTopSong(param) {
        const { artistId: id } = param;
        try {
            const result = await NeteaseCloudMusicApi_1.artist_top_song({
                id,
            });
            return result.body;
        }
        catch (error) {
            let msg = error.body.message || "查询歌手热门歌曲失败";
            this.ctx.throwBizError(msg);
        }
    }
    //歌手全部歌曲
    async getArtistSubList(param) {
        try {
            const { order = "hot", limit = 50, offset = 0 } = param;
            //请求歌手歌曲
            const result = await NeteaseCloudMusicApi_1.artist_songs({
                id: param.id,
                order,
                limit,
                offset,
            });
            return result.body;
        }
        catch (error) {
            let msg = error.body.message || "查询歌手全部歌曲失败";
            this.ctx.throwBizError(msg);
        }
    }
    //获取收藏歌手列表
    async getArtistSubSong(param) {
        const { limit = 25, offset = 0 } = param;
        try {
            const result = await NeteaseCloudMusicApi_1.artist_sublist({
                limit,
                offset,
            });
            return result.body;
        }
        catch (error) {
            let msg = error.body.message || "查询收藏歌手列表失败";
            this.ctx.throwBizError(msg);
        }
    }
}
exports.default = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQThCO0FBTzlCLCtEQU04QjtBQUU5QixNQUFxQixNQUFPLFNBQVEsYUFBTztJQUN6Qzs7O09BR0c7SUFDSSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQXVCO1FBQ2hELElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGtDQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUM7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsV0FBVztJQUNKLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBNEI7UUFDakQsRUFBRTtRQUNGLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGlDQUFVLENBQUM7Z0JBQzlCLEVBQUU7YUFDSCxDQUFDLENBQUM7WUFDSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFFBQVEsQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFDRCxhQUFhO0lBQ04sS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUE0QjtRQUNyRCxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxzQ0FBZSxDQUFDO2dCQUNuQyxFQUFFO2FBQ0gsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUM7WUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsUUFBUTtJQUNELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUE4QjtRQUMxRCxJQUFJO1lBQ0YsTUFBTSxFQUFFLEtBQUssR0FBRyxLQUFLLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ3hELFFBQVE7WUFDUixNQUFNLE1BQU0sR0FBRyxNQUFNLG1DQUFZLENBQUM7Z0JBQ2hDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDWixLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsTUFBTTthQUNQLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztTQUNwQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELFVBQVU7SUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBaUM7UUFDN0QsTUFBTSxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUN6QyxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxxQ0FBYyxDQUFDO2dCQUNsQyxLQUFLO2dCQUNMLE1BQU07YUFDUCxDQUFDLENBQUM7WUFDSCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQztZQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7Q0FDRjtBQTVFRCx5QkE0RUMifQ==