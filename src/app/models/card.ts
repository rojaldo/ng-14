export class Card {
    _question!: string;
    _answers!: string[];
    _correctAnswer!: string;
    _answered = false;
    _rightAnswered!: boolean;
    _userResponse!: string;

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

    get answered(): boolean {
        return this._answered;
    }

    set answered(value: boolean) {
        this._answered = value;
    }

    get rightAnswered(): boolean {
        return this._rightAnswered;
    }

    get userResponse(): string {
        return this._userResponse;
    }

    set userResponse(response: string) {
        this._userResponse = response;
    }

    response(answer: string, index: number) {
        this.answered = true;
        this.userResponse = answer;
        if (answer === this.correctAnswer) {
            this._rightAnswered = true;
        } else {
            this._rightAnswered = false;
        }
    }

    clone(): Card {
        let myIncorrectAnswers = [...this.answers];
        // remove correctAnswer from myIncorrectAnswers
        myIncorrectAnswers.splice(myIncorrectAnswers.indexOf(this.correctAnswer), 1);
        
        let card = new Card({
            question: this.question,
            incorrect_answers: myIncorrectAnswers,
            correct_answer: this.correctAnswer,
        });

        return card;
    }
}