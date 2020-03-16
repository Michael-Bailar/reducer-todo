
const todoInitialState = [
    {
        item: 'Learn about reducers',
        completed: true, 
        id: 1
    },
    {
        item: 'chores',
        completed: false, 
        id: 2
    }
]

const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NEW_CHORE':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ]
        case 'TOGGLE_COMPLETE':
            console.log(state)
            state.map(item => {
                return item.completed = action.payload
                }
            )

        default:
            return state;
    }
}



export { todoReducer, todoInitialState }

