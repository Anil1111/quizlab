import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Quiz } from './Quiz';


interface IQuizState {
    highScores: HighScore[];
  
}

export class HighScores extends React.Component<RouteComponentProps<{}>, IQuizState> {

    public constructor() {
        super(); {
            this.state = { highScores: [] };
        }

        this.fetchScores = this.fetchScores.bind(this);
    }

    public render() {

        let oldList = this.state.highScores;
        let list = oldList.map((x, index) =>
            <li key={x + ':' + index}>{x._HighScore}</li>);
        // elementet 1 blir <li>1</li> osv.
        return <ul>{list}</ul>;

    }

    fetchScores() {
        // fr�ga API:et efter aktuell data


        fetch('/question/GetHighScores')
            .then(data => {
                console.log('Question returned ', data);
                return data.json();
            })
            .then(obj => {

                this.setState({
                    highScores: obj
                });
            })
            .catch(message => {
                console.log('n�got gick fel: ' + message);
            })
    }
    componentDidMount() {
        this.fetchScores();
    }
}

interface HighScore {
    _HighScore: number;
}
