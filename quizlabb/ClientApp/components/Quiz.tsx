import * as React from 'react';
import { RouteComponentProps } from 'react-router';


interface IQuizProps { }
interface IQuizState {
    totalPayed: number;
    actualTax: number;
    hasFetchedData: boolean;
    amountToPay: number;
}

export class Quiz extends React.Component<IQuizProps,IQuizState> {

    public constructor(props: IQuizProps) {
        super(props);

    }
    render() {

        return <div>Test</div>
    }

}

