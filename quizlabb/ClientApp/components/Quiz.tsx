import * as React from 'react';
import { RouteComponentProps } from 'react-router';



let name = document.getElementById('react-app')!.textContent;
interface IQuizProps { }
interface IQuizState {
    questions: Quest[];
    selectedOption: string;
    isButtonDisable: boolean;
    counter: number;
    score: number;
    startQuiz: boolean;
    correction: string;
}

export class Quiz extends React.Component<IQuizProps, IQuizState> {




    public constructor(props: IQuizProps) {
        super(props); {
            this.state = { questions: [], selectedOption: "", isButtonDisable: true, counter: 0, score: 0, startQuiz: false, correction: "" };
        }
        this.fetchQuestion = this.fetchQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitScore = this.submitScore.bind(this);
        this.startQuiz = this.startQuiz.bind(this);
        this.restartQuiz = this.restartQuiz.bind(this);
    }
    public render() {


        if (this.state.startQuiz == false) {
            return <div className="text-center">
                <h1>Welcome {name}, are you ready to play the quiz?</h1>
                <button id="startQuizButton" className="submitBtn" onClick={this.startQuiz}>Start</button>
            </div>
        }

        else {

            let oldList = this.state.questions;

            let question = oldList.map(x => x.question);
            let option1 = oldList.map(o => o.option1);
            let option2 = oldList.map(o => o.option2);
            let option3 = oldList.map(o => o.option3);

            let counter = this.state.counter;

            if (this.state.questions.length == counter) {

                let maximumScore = this.state.questions.length;
                this.submitScore();
                return < div className="text-center"><h1>You got {this.state.score} of {this.state.questions.length} points. Do you want to play again?</h1><button id="startQuizButton" className="submitBtn" onClick={this.restartQuiz}>Start</button></div>

            }
            else {


                return (<div>
                    <ol>
                        <h2>{question[counter]}</h2>
                        <br />
                        <label className="container">{option1[counter]}
                            <input type="radio" name="q1" value={option1[counter]} onChange={this.handleChange} checked={this.state.selectedOption === option1[counter]} /> < br />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">{option2[counter]}
                            <input type="radio" name="q1" value={option2[counter]} onChange={this.handleChange} checked={this.state.selectedOption === option2[counter]} /><br />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container">{option3[counter]}
                            <input type="radio" name="q1" value={option3[counter]} onChange={this.handleChange} checked={this.state.selectedOption === option3[counter]} /><br />
                            <span className="checkmark"></span>
                        </label>
                        <br />
                        <button value="submit" className="submitBtn" disabled={this.state.isButtonDisable} onClick={this.handleSubmit}>Submit</button>
                    </ol><div id="infoLabel">
                        <label id="points">{this.state.score} of {this.state.questions.length} points</label>
                        </div>
                </div>);
            }
        }

    }

    startQuiz(event: any) {
        this.setState({ startQuiz: true })
        console.log(this.state.startQuiz)
    }

    restartQuiz() {
        this.setState({ startQuiz: true })
        this.setState({ counter: 0 })
        this.setState({score: 0})
        console.log(this.state.startQuiz)
        
    }

    handleChange(event: any) {
        this.setState({ selectedOption: event.target.value })
        this.setState({ isButtonDisable: false })
       


    }

    handleSubmit(event: any) {

       
        let count = this.state.counter + 1;

        if (count <= this.state.questions.length) {

            this.setState({ counter: count })


            let finalSelectedOption = this.state.selectedOption;


            let correctAnswers = this.state.questions.filter(x => x.correctAnswer == finalSelectedOption);

            if (correctAnswers.length > 0) {
                console.log('1 poäng!');

                let add = this.state.score + 1;

                this.setState({ score: add })
            } else {
                console.log('0 poäng');
            }

            console.log(finalSelectedOption);
            console.log(this.state.counter);

            this.setState({ isButtonDisable: true })
        }



    }
    submitScore() {
        console.log('/Question/ReceiveScore?score=' + this.state.score + '&name=' + name);
        fetch('/Question/ReceiveScore?score=' + this.state.score + '&name=' + name)
            .then(Response =>
                console.log('fetch status: ', Response.status));
    }

    fetchQuestion() {
        // fråga API:et efter aktuell data


        fetch('/api/GetQuestions')
            .then(data => {
                console.log('Question returned ', data);
                return data.json();
            })
            .then(obj => {

                this.setState({
                    questions: obj
                });
            })
            .catch(message => {
                console.log('något gick fel: ' + message);
            })
    }
    componentDidMount() {
        this.fetchQuestion();
    }
}

interface Quest {
    question: string;
    correctAnswer: string;
    option1: string;
    option2: string;
    option3: string;
}

