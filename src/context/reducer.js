export const initialState= {
    todoList: []
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todoList: [action.payload, ...state.todoList]
            }

        case "DELETE_TODO":
            return{
                ...state,
                todoList: state.todoList.filter((todo)=> {
                    return todo.id !== action.payload
                })
            }
        case "UPDATE_TODO":
            const temp = action.payload;
            // const updatedTodo = state.todoList.filter((todo) => {
            //     return todo.id !== temp.id;
            // })
            const tempArray = state.todoList;
            for (let i = 0; i < tempArray.length; i++) {
                if(tempArray[i].id === temp.id ){
                    tempArray[i] = temp;
                }
                
            }
            return {
                ...state,
                todoList: [...tempArray]
            }

        default:
            return state;
        
    }
}

export default reducer