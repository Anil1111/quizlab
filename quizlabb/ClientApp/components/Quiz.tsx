import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface IQuizProps { }
interface IQuizState {
    questions: Quest[];
    selectedOption: string;
}

export class Quiz extends React.Component<IQuizProps, IQuizState> {




    public constructor(props: IQuizProps) {
        super(props); {
            this.state = { questions: [] , selectedOption: ""};
        }
        this.fetchQuestion = this.fetchQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    public render() {

        let oldList = this.state.questions;



        let list = oldList.map((x, index) => <li key={x + ':' + index}>{x.question}<br /><input type="radio" onClick={(e)=>this.handleChange(x.option1,index)} value={x.option1} name={index.toString()} /> {x.option1} < br /> <input type="radio" onClick={(e)=>this.handleChange(x.option2,index)} value={x.option2} name={index.toString()} />{x.option2}<br /><input type="radio" onClick={(e) =>this.handleChange(x.option3,index)} value={x.option3} name={index.toString()} />{x.option3}</li>);



        return (
            <div>
                <ol>{list}</ol><br />
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </div>
        );

    }

    handleChange(option: string, index: number) {
        this.setState({ selectedOption: option })

        console.log(index+' '+option);
      
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

