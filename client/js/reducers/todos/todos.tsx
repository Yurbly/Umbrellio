const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';


    interface IState {
        todos: Array<any>
    }

    interface IAction {
        type: string,
        todoText?: string,
        id: number
    }

    const defState: IState = {
        todos: []
    };


    const todos = (state: IState = defState, action: IAction) => {
        switch (action.type) {
            case ADD_TODO:
                return {
                    ...state,
                    todos: [...state.todos, {id: action.id, todoText: action.todoText}]
                };
            default:
                return state;
        }
    };

export default todos;