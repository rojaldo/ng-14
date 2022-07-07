export class Beer{

    private _id!: number;
    private _name!: string;
    private _tagline!: string;
    private _description!: string;
    private _firstBrewed!: string;
    private _imageUrl!: string;
    private _abv!: number;

    constructor(json?: any) {
        this._id = json.id;
        this._name = json.name;
        this._tagline = json.tagline;
        this._description = json.description;
        this._firstBrewed = json.first_brewed;
        this._imageUrl = json.image_url;
        this._abv = json.abv;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get tagline(): string {
        return this._tagline;
    }

    get description(): string {
        return this._description;
    }

    get firstBrewed(): string {
        return this._firstBrewed;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    get abv(): number {
        return this._abv;
    }

    clone(): Beer {
        return  new Beer({
            id: this._id,
            name: this._name,
            tagline: this._tagline,
            description: this._description,
            first_brewed: this._firstBrewed,
            image_url: this._imageUrl,
            abv: this._abv
        });
    }
}