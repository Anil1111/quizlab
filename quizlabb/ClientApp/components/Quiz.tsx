import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface IQuizProps { }
interface IQuizState {
    questions: Quest[];
    selectedOption: string;
    isButtonDisable: boolean;
}

export class Quiz extends React.Component<IQuizProps, IQuizState> {




    public constructor(props: IQuizProps) {
        super(props); {
            this.state = { questions: [], selectedOption: "", isButtonDisable: false };
        }
        this.fetchQuestion = this.fetchQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    public render() {

        let oldList = this.state.questions;



        let list = oldList.map((x, index) => <li key={x + ':' + index}>{x.question}<br />
            <input type="radio" disabled={this.state.isButtonDisable} onChange={this.handleChange} value={x.option1} name={index.toString()} /> {x.option1} < br />
            <input type="radio" disabled={this.state.isButtonDisable} onChange={this.handleChange} value={x.option2} name={index.toString()} />{x.option2}<br />
            <input type="radio" disabled={this.state.isButtonDisable} onChange={this.handleChange} value={x.option3} name={index.toString()} />{x.option3}</li>);



        return (
            <div>
                <ol>{list}</ol><br />
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
        );

    }

    handleChange(event:any) {
        this.setState({ selectedOption: event.target.value })
        this.setState({ isButtonDisable: true })

        let selected = event.target.value;

        let correctAnswers = this.state.questions.filter(x => x.correctAnswer == selected);

        if (correctAnswers.length > 0) {
            console.log('1 poäng!');
        } else {
            console.log('0 poäng');
        }
       
        correctAnswers = [];
        console.log(event.target.value)
      
    }

    handleSubmit(event: any) {

      

        console.log('bajs');
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

