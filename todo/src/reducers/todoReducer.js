
const todoInitialState =  {
    todoItems: [
        {
            item: 'Learn about reducers',
            completed: false, 
            id: 0
        },
        {
            item: 'chores',
            completed: false, 
            id: 1
        }
    ]
}



const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NEW_CHORE':
            return {
                ...state,
                todoItems: [
                    ...state.todoItems, 
                    {
                        item: action.payload,
                        completed: false,
                        id: (state.todoItems.length)
                    }
                ]
            }

        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todoItems: state.todoItems.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            completed: action.payload
                        }
                    } else {
                        return {...item}
                    }
                })
            }

        case 'REMOVE_COMPLETED_ITEMS':
            return {
                ...state,
                todoItems: state.todoItems.filter(item => {
                    if (item.completed === false ){
                        return {...item}
                    } 
                })
            }

        default:
            return state;
    }
}



export { todoReducer, todoInitialState }

