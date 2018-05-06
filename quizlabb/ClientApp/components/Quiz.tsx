import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface IQuizProps { }
interface IQuizState {
    questions: Quest[];
    selectedOption: string;
    isButtonDisable: boolean;
    counter: number;
}

export class Quiz extends React.Component<IQuizProps, IQuizState> {




    public constructor(props: IQuizProps) {
        super(props); {
            this.state = { questions: [], selectedOption: "", isButtonDisable: false, counter: 0 };
        }
        this.fetchQuestion = this.fetchQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    public render() {

        let oldList = this.state.questions;

        let question = oldList.map(x => x.question);
        let option1 = oldList.map(o => o.option1);
        let option2 = oldList.map(o => o.option2);
        let option3 = oldList.map(o => o.option3);

        let counter = this.state.counter;

        
        if (this.state.questions.length != counter) {

            return (
                <ol>
                    {question[counter]}
                    <br />
                    <input type="radio" name="q1" value={option1[counter]} onChange={this.handleChange} checked={this.state.selectedOption === option1[counter]} /> {option1[counter]} < br />
                    <input type="radio" name="q1" value={option2[counter]} onChange={this.handleChange} checked={this.state.selectedOption === option2[counter]} />{option2[counter]}<br />
                    <input type="radio" name="q1" value={option3[counter]} onChange={this.handleChange} checked={this.state.selectedOption === option3[counter]} />{option3[counter]}<br />
                    <button value="submit" disabled={this.state.isButtonDisable} onClick={this.handleSubmit}>Submit</button>
                </ol>);
        }

        else {

            return <div>{this.state.counter}</div>
        }

    }


    handleChange(event: any) {
        this.setState({ selectedOption: event.target.value })
        this.setState({ isButtonDisable: false })



    }

    handleSubmit(event: any) {

        let count = this.state.counter + 1;

        this.setState({ counter: count })


        let finalSelectedOption = this.state.selectedOption;


        let correctAnswers = this.state.questions.filter(x => x.correctAnswer == finalSelectedOption);

        if (correctAnswers.length > 0) {
            console.log('1 poäng!');
        } else {
            console.log('0 poäng');
        }

        console.log(finalSelectedOption);
        console.log(this.state.counter);
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

