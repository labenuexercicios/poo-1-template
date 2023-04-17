export class Video{
    constructor(
        private id: String,
        private title: String,
        private duration: Number,
        private uploadAt: String
    ){}
    public getId():String{
        return this.id;
    }
    public setId(newId:String):void{
        this.id = newId;
    }

    public getTitle():String{
        return this.title;
    }
    public setTitle(newTitle:String):void{
        this.title = newTitle;
    }

    public getDuration():Number{
        return this.duration;
    }
    public setDuration(newDuration:Number):void{
        this.duration = newDuration;
    }

    public getUploadAt():String{
        return this.uploadAt;
    }
    public setUploadAt(newUploadAt:String):void{
        this.uploadAt = newUploadAt;
    }
}