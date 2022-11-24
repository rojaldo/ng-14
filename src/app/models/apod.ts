export class Apod {

    private _date = '';
    private _explanation = '';
    private _hdurl = '';
    private _mediaType = '';
    private _serviceVersion = '';
    private _title = '';
    private _url = '';
    private _videoID = '';

    constructor(json?: any) {
        if (json) {
            this._date = json.date;
            this._explanation = json.explanation;
            this._hdurl = json.hdurl;
            this._mediaType = json.media_type;
            this._serviceVersion = json.service_version;
            this._title = json.title;
            this._url = json.url;
            console.log('is YT video: ' + this.isYTVideo());
            if (this.isYTVideo()) {
                this._setVideoID();
                console.log('video ID: ' + this.videoID);
            }            
        }
    }

    get date() {
        return this._date;
    }

    get explanation() {
        return this._explanation;
    }

    get hdurl() {
        return this._hdurl;
    }

    get mediaType() {
        return this._mediaType;
    }

    get serviceVersion() {
        return this._serviceVersion;
    }

    get title() {
        return this._title;
    }

    get url() {
        return this._url;
    }

    get videoID() {
        return this._videoID;
    }

    isImage() {
        return this._mediaType === 'image';
    }

    isVideo() {
        return this._mediaType === 'video';
    }

    isYTVideo() {
        return this._url.includes('youtube');
    }

    private _setVideoID() {
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            var match = this.url.match(regExp);
            this._videoID = (match&&match[7].length==11)? match[7] : 'ERROR';
    }

}