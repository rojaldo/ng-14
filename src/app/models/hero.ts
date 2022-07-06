export class Hero {
    constructor(private _name = '', private _description = '') {
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    set name(value) {
        this._name = value;
    }

    set description(value) {
        this._description = value;
    }

    clone(): Hero {
        return new Hero(this.name, this.description);
    }
    
}