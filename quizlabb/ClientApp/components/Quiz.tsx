import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface IQuizProps { }
interface IQuizState {
    question1: string;
}

export class Quiz extends React.Component<IQuizProps,IQuizState> {

    public constructor(props: IQuizProps) {
        super(props); {
            this.state = { question1: "" };
        }
        this.fetchQuestion = this.fetchQuestion.bind(this);
    }
    public render() {
        return <div>{this.state.question1}</div>;
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
                    question1: obj.option1
                   
                });
                
                console.log('GetQuestionInfo json ', obj);
            })
            .catch(message => {
                console.log('något gick fel: ' + message);
            })
    }
    componentDidMount() {
        this.fetchQuestion();
    }
}

