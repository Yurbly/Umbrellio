import * as React from 'react';
import {connect} from "react-redux";
import List from '@material-ui/core/List';
// import * as styles from './TodoContainer.less';
import TodoItem from '../TodoItem/TodoItem';
import { ITodo } from "../TodoItem/TodoItem";

interface IState {
    todos: []
}
interface IProps {
    todos: []
}

export const mapStateToProps = (state: any) => ({
    todos:state.todos.todos
});


class TodoContainer extends React.Component<IProps, IState> {


    constructor(props: IProps) {
        super(props);

    }

    handleToggle = () => {

    };

    render() {
        return (
            <List >
                {this.props.todos.map((todo:ITodo) => <TodoItem todo={todo} handleToggle={this.handleToggle}/>)}
            </List>
        );
    }
}

export default connect(mapStateToProps)(TodoContainer);