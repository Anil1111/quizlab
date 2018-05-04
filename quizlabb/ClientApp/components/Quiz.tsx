import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface IQuizProps { }
interface IQuizState {
    questions: Quest[];
}

export class Quiz extends React.Component<IQuizProps, IQuizState> {


   

    public constructor(props: IQuizProps) {
        super(props); {
            this.state = { questions: [] };
        }
        this.fetchQuestion = this.fetchQuestion.bind(this);
    }
    public render() {

        let oldList = this.state.questions;
        let list = oldList.map((x, index) => <li key={x + ':' + index}>{x.option1}</li>);
        return <ul>{list}</ul>;
            
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
    option1: string;
    option2: string;
    option3: string;
}

