import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class CreateQuestion extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
                <h2>Add a new question to the quiz!</h2>
            <form className="questionForm">
                <div className=" form-group col-xs-7">
                    <label>Question:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-xs-7">
                    <label>Option 1:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-xs-7">
                    <label>Option 2:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-xs-7">
                    <label>Option 3:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-xs-7">
                    <label>Correct answer:</label>
                    <input type="text" className="form-control" />
                    <br/>
                    <button type="submit" className="submitBtn">Submit</button>     
                </div>
                
               
                </form>
        </div>;
    }
}
