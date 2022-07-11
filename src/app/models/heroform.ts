export class HeroForm {
    constructor(private _name: string, private _email: string, private _postalCode: number, private _description = '') {
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get postalCode() {
        return this._postalCode;
    }

    set postalCode(value) {
        this._postalCode = value;
    }

    set name(value) {
        this._name = value;
    }

    set description(value) {
        this._description = value;
    }


    clone(): HeroForm {
        return new HeroForm(this.name, this.email, this.postalCode, this.description);
    }
    
}