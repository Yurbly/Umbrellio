import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button/Button";
import {connect} from "react-redux";
import * as Api from '../../api/Api';

interface IState  {
    text: string
}

interface IProps {
    addTodo: Function
}

export const mapDispatchToProps = (dispatch: Function) => ({
    addTodo: (todoText: string, id: string) =>
        dispatch({
            type: 'ADD_TODO',
            id,
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
        Api.post('', {todoText: this.state.text}).then((result:any) => {
            this.props.addTodo(this.state.text, result.data.todoText);
        }).catch((err) => {
            console.log(err);
        });
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