export class Card {
    private _category = '';
    private _type = '';
    private _difficulty = '';
    private _question = '';
    private _correctAnswer = '';
    private _answers: string[] = [];

    constructor(json: any) {
        this._category = json.category;
        this._type = json.type;
        this._difficulty = json.difficulty;
        this._question = json.question;
        this._correctAnswer = json.correct_answer;
        this._answers = json.incorrect_answers;
        this._answers.push(this._correctAnswer);
    }

    get category(): string {
        return this._category;
    }

    get type(): string {
        return this._type;
    }

    get difficulty(): string {
        return this._difficulty;
    }

    get question(): string {
        return this._question;
    }

    get correctAnswer(): string {
        return this._correctAnswer;
    }

    get answers(): string[] {
        return this._answers;
    }

}