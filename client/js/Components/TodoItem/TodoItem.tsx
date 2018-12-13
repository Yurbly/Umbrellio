import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
// import {styles} from './TodoItem.less';

export interface ITodo {
    id: number,
    todoText: string,
    checked: boolean
}

interface IState {
    todoText: string
}
interface IProps {
    todo: ITodo,
    handleToggle: Function
}

// export const mapStateToProps = (state: any) => ({
//     todos:state.todos.todos
// });


class TodoItem extends React.Component<IProps, IState> {


    constructor(props: IProps) {
        super(props);
        this.state = {
            todoText: this.props.todo.todoText
        }
    }

    handleToggle = () => {

    };

    render() {
        return (
            <ListItem key={this.props.todo.id} role={undefined} dense button onClick={this.props.handleToggle()}>
                <Checkbox
                    checked={this.props.todo.checked}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText primary={this.props.todo.todoText} />
            </ListItem>
        );
    }
}

export default TodoItem;