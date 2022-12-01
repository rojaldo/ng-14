export class Card {
    private _category = '';
    private _type = '';
    private _difficulty = '';
    private _question = '';
    private _correctAnswer = '';
    private _answers: string[] = [];
    private _answered = false;
    private _userAnswer: string | undefined = undefined;
    private _rightAnswered = false;

    constructor(json: any) {
        this._category = json.category;
        this._type = json.type;
        this._difficulty = json.difficulty;
        this._question = json.question;
        this._correctAnswer = json.correct_answer;
        this._answers = json.incorrect_answers;
        this._answers.push(this._correctAnswer);
        this.shuffle();
    }

    shuffle() {
        for (let i = this._answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._answers[i], this._answers[j]] = [this._answers[j], this._answers[i]];
        }
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

    get answered(): boolean {
        return this._answered;
    }

    set answered(value: boolean) {
        this._answered = value;
    }

    get userAnswer(): string | undefined {
        return this._userAnswer;
    }

    set userAnswer(value: string | undefined) {
        this._userAnswer = value;
    }

    get rightAnswered(): boolean {
        return this._rightAnswered;
    }

    set rightAnswered(value: boolean) {
        this._rightAnswered = value;
    }

}