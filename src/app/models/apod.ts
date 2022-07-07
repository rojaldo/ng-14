export class Apod{
    private _title!: string;
    private _date!: string;
    private _url!: string;
    private _mediaType!: string;
    private _explanation!: string;
    private _hdurl!: string;
    private _serviceVersion!: string;
    private _videoID!: string | undefined;

    constructor(json: any) {
        this._title = json.title;
        this._date = json.date;
        this._url = json.url;
        this._mediaType = json.media_type;
        this._explanation = json.explanation;
        this._hdurl = json.hdurl;
        this._serviceVersion = json.service_version;
        this._videoID = this.getVideoID();
    }

    get title(): string {
        return this._title;
    }

    get date(): string {
        return this._date;
    }

    get url(): string {
        return this._url;
    }

    get mediaType(): string {
        return this._mediaType;
    }

    get explanation(): string {
        return this._explanation;
    }

    get hdurl(): string {
        return this._hdurl;
    }

    get serviceVersion(): string {
        return this._serviceVersion;
    }

    get videoID(): string | undefined {
        return this._videoID;
    }

    isImage(): boolean {
        return this._mediaType === 'image';
    }

    isVideo(): boolean {
        // check that url is a youtube video or vimeo video
        return this._mediaType === 'video' && (this._url.indexOf('youtube') > -1 || this._url.indexOf('vimeo') > -1);
    }

    getVideoID(): string | undefined {   
        console.log('getVideoID');
             
        if (this.isVideo()) {
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            var match = this._url.match(regExp);
            return (match&&match[7].length==11)? match[7] : undefined;
        }
        return undefined;
    }

    isValid(): boolean {
        return this.isVideo() || this.isImage();
    } 


}