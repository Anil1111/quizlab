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


        let counter = 0;

        let oldList = this.state.highScores;
        let list = oldList.map((x, index) =>
            <li key={x + ':' + index}>{+x.userName}</li>);
        // elementet 1 blir <li>1</li> osv.
        return <table className='table table-striped'>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {oldList.map((x,index) =>
                    <tr key={x.userName+':'+index}>
                        <td>{x.userName}</td>
                        <td>{x._HighScore}</td>
                        <td>{x.dateTime}</td>
                    </tr>
                )}
            </tbody>
        </table>;;

    }

    fetchScores() {
        // fråga API:et efter aktuell data


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
                console.log('något gick fel: ' + message);
            })
    }
    componentDidMount() {
        this.fetchScores();
    }
}

interface HighScore {
    _HighScore: number;
    userName: string;
    dateTime: string;
}
