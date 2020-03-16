
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
                        complete: false,
                        id: (state.todoItems.length + 1)
                    }
                ]
            }

        case 'TOGGLE_COMPLETE':
            console.log(state)
            return {
                ...state,
                todoItems: state.todoItems.map((item, index) => {
                    console.log(item, index, action)
                    if (item.id !== (index)) {
                        return {
                            ...item,
                            completed: action.payload
                        }
                    }
                })
            }

        default:
            return state;
    }
}



export { todoReducer, todoInitialState }

