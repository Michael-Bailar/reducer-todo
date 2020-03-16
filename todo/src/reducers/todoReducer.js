
const todoInitialState =  {
    todoItems: [
        {
            item: 'Learn about reducers',
            completed: false, 
            id: 1
        },
        {
            item: 'chores',
            completed: false, 
            id: 2
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
                        id: (state.todoItems.length + 1)
                    }
                ]
            }

        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todoItems: state.todoItems.map((item, index) => {
                    console.log(item, index, action)
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

        default:
            return state;
    }
}



export { todoReducer, todoInitialState }

