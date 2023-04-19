import { BaseDataBase } from "./BaseDataBase";
import { TVideoDB } from "../types";


export class VideoDataBase extends BaseDataBase{
    public static TABLE_VIDEOS = "videos"

    public async getVideos(q:string|undefined):Promise<TVideoDB[]>{
        let videosDB;
    if (q) {
      const result: TVideoDB[] = await BaseDataBase.connection(VideoDataBase.TABLE_VIDEOS).where("name", "LIKE", `%${q}%`);
      videosDB = result;
    } else {
      const result:TVideoDB[] = await BaseDataBase.connection(VideoDataBase.TABLE_VIDEOS);
      videosDB = result;
    }
    return videosDB;
    }

    public async createVideo(newVideo:TVideoDB):Promise<void>{
        await BaseDataBase.connection(VideoDataBase.TABLE_VIDEOS).insert(newVideo);
    }

    public async updateVideo(newVideo:TVideoDB):Promise<void>{
        await BaseDataBase.connection(VideoDataBase.TABLE_VIDEOS).update(newVideo).where({ id: newVideo.id });
    }

    public async deleteVideo(id:string):Promise<void>{
        await BaseDataBase.connection(VideoDataBase.TABLE_VIDEOS).del().where({id})
    }
}