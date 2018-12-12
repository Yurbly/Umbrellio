import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import {connect} from "react-redux";

interface IState  {
    text: string
}

interface IProps {
    addTodo: Function
}

export const mapDispatchToProps = (dispatch: Function) => ({
    addTodo: (todoText: string) =>
        dispatch({
            type: 'ADD_TODO',
            id:0,
            todoText
        })
});

class MainPanel extends React.Component<IProps, IState> {


    constructor(props:IProps) {
        super(props);
        this.state = {
            text: ''
        }
    }

    submitHandler = () => {
        this.props.addTodo(this.state.text);
    };

    handleChange = (event: any) => {
        this.setState({
            text: event.target.value
        })
    };

    render() {

        return (
            <div>
                <form>
                    <TextField defaultValue={this.state.text} onChange={this.handleChange}/>
                </form>
                <Button variant="contained" color="primary" onClick={this.submitHandler}>
                    Submit
                </Button>
            </div>
        );
    }
}

export default connect(() => {return {}}, mapDispatchToProps)(MainPanel);