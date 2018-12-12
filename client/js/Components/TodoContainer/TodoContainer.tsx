import * as React from 'react';
import {connect} from "react-redux";

interface IState {
    todos: []
}
interface IProps {
    todos: []
}
interface ITodo {
    id: number,
    todoText: string
}

export const mapStateToProps = (state: any) => ({
    todos:state.todos.todos
});


class TodoContainer extends React.Component<IProps, IState> {


    constructor(props: IProps) {
        super(props);

    }

    render() {
        return (
            <div>
                {this.props.todos.map((todo:ITodo) => <div key={todo.id}>{todo.todoText}</div>)}
            </div>
        );
    }
}

export default connect(mapStateToProps)(TodoContainer);