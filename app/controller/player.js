"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class Player extends egg_1.Controller {
    /*
      type 取值
      1:男歌手
      2:女歌手
      3:乐队
      area 取值
      -1:全部
      7华语
      96欧美
      8:日本
      16韩国
      0:其他
      initial 取值 a-z/A-Z
  
      area
      -1:全部
      7华语
      96欧美
      8:日本
      16韩国
      0:其他
  */
    async getArtistList() {
        this.ctx.validate({
            type: { type: "string", required: false },
            offset: { type: "number", required: false },
            limit: { type: "number", required: false },
        });
        const result = await this.ctx.service.player.getArtistList(Object.assign({}, this.ctx.request.body));
        this.ctx.response.success(result);
    }
    //收藏与取消收藏歌手
    async artistSub() {
        this.ctx.validate({
            artistId: { type: "string", required: true },
        });
        const result = this.ctx.service.player.artistSub(Object.assign({}, this.ctx.request.body));
        this.ctx.response.success(result);
    }
    async artistTopSong() {
        this.ctx.validate({
            artistId: { type: "string", required: true },
        });
        const result = this.ctx.service.player.artistTopSong(Object.assign({}, this.ctx.request.body));
        this.ctx.response.success(result);
    }
    //获取歌手全部歌曲
    async getArtistSubList() {
        this.ctx.validate({
            id: { type: "string", required: true },
            order: { type: "string", required: true },
        });
        const result = this.ctx.service.player.getArtistSubList(Object.assign({}, this.ctx.request.body));
        this.ctx.response.success(result);
    }
    //收藏的歌手列表
    async getArtistSubSong() {
        const result = this.ctx.service.player.getArtistSubSong(Object.assign({}, this.ctx.request.body));
        this.ctx.response.success(result);
    }
}
exports.default = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQWlDO0FBRWpDLE1BQXFCLE1BQU8sU0FBUSxnQkFBVTtJQUM1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJBO0lBRU8sS0FBSyxDQUFDLGFBQWE7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDaEIsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO1lBQ3pDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtZQUMzQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7U0FDM0MsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxtQkFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUN4QixDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxXQUFXO0lBQ0osS0FBSyxDQUFDLFNBQVM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDaEIsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1NBRTdDLENBQUMsQ0FBQztRQUNILE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLG1CQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ3hCLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxhQUFhO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ2hCLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtTQUM3QyxDQUFDLENBQUM7UUFFSCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxtQkFDL0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUN4QixDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxVQUFVO0lBQ0gsS0FBSyxDQUFDLGdCQUFnQjtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNoQixFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7WUFDdEMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1NBQzFDLENBQUMsQ0FBQztRQUNILE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsbUJBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFDeEIsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsU0FBUztJQUNGLEtBQUssQ0FBQyxnQkFBZ0I7UUFDM0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGdCQUFnQixtQkFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUN4QixDQUFDO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQWpGRCx5QkFpRkMifQ==