import * as React from 'react';
import { RouteComponentProps } from 'react-router';


let id = document.getElementById('react-app')!.textContent;
interface IQuizProps { }
interface IQuizState {
    questions: Quest[];
    selectedOption: string;
    isButtonDisable: boolean;
    counter: number;
    score: number;
}

export class Quiz extends React.Component<IQuizProps, IQuizState> {




    public constructor(props: IQuizProps) {
        super(props); {
            this.state = { questions: [], selectedOption: "", isButtonDisable: false, counter: 0, score: 0 };
        }
        this.fetchQuestion = this.fetchQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitScore = this.submitScore.bind(this);
    }
    public render() {

        let oldList = this.state.questions;

        let question = oldList.map(x => x.question);
        let option1 = oldList.map(o => o.option1);
        let option2 = oldList.map(o => o.option2);
        let option3 = oldList.map(o => o.option3);

        let counter = this.state.counter;



        if (this.state.questions.length == counter && counter != 0) {

            this.submitScore();
            console.log(this.state.score)
            return <div>{this.state.counter}</div>

        }
        else {


            return (
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
                </ol>);
        }
    }

    handleChange(event: any) {
        this.setState({ selectedOption: event.target.value })
        this.setState({ isButtonDisable: false })
        console.log(id);



    }

    handleSubmit(event: any) {

        let count = this.state.counter + 1;

        if (count <= this.state.questions.length) {

            this.setState({ counter: count })


            let finalSelectedOption = this.state.selectedOption;


            let correctAnswers = this.state.questions.filter(x => x.correctAnswer == finalSelectedOption);

            if (correctAnswers.length > 0) {
                console.log('1 po�ng!');

                let add = this.state.score + 1;

                this.setState({ score: add })
            } else {
                console.log('0 po�ng');
            }

            console.log(finalSelectedOption);
            console.log(this.state.counter);
        }



    }
    submitScore() {
        console.log('/Question/ReceiveScore?score=' + this.state.score + '&id=' + id);
        fetch('/Question/ReceiveScore?score=' + this.state.score + '&id=' + id)
            .then(Response =>
                console.log('fetch status: ', Response.status));
    }

    fetchQuestion() {
        // fr�ga API:et efter aktuell data


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
                console.log('n�got gick fel: ' + message);
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

