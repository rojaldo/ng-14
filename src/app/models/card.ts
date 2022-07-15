export class Card {
    _question!: string;
    _answers!: string[];
    _correctAnswer!: string;

    constructor(jsonCard: any) {
        this._question = jsonCard.question;
        this._answers = jsonCard.incorrect_answers;
        this._answers.push(jsonCard.correct_answer);
        this._correctAnswer = jsonCard.correct_answer;
    }

    get question(): string {
        return this._question;
    }

    get answers(): string[] {
        return this._answers;
    }

    get correctAnswer(): string {
        return this._correctAnswer;
    }
}