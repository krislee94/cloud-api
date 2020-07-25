declare module "cloud" {
  interface IArtistListParam {
    initial?: string; //initial 取值 a-z/A-Z  如果输入a 则全部返回a开头的歌手分类
    offset?: number; //pageNum
    limit?: number; //pageSize
    total?: boolean; //是否查询全部
    type?: string; //1 男歌手 2 女歌手 3 乐队
    area?: string | number; // -1 是全部，7 是华语，96是欧美，8 日本 16韩国 0其他
  }
}
