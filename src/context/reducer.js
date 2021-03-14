export const initialState= {
    todoList: JSON.parse(localStorage.getItem('todo')) || []
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO":
            localStorage.setItem('todo', JSON.stringify([action.payload, ...state.todoList]))
            return{
                ...state,
                todoList: [action.payload, ...state.todoList]
            }

        case "DELETE_TODO":
            localStorage.setItem('todo', JSON.stringify(state.todoList.filter((todo)=> {
                return todo.id !== action.payload
            })))
            return{
                ...state,
                todoList: state.todoList.filter((todo)=> {
                    return todo.id !== action.payload
                })
            }
        case "UPDATE_TODO":
            const temp = action.payload;
            
            const tempArray = state.todoList;
            for (let i = 0; i < tempArray.length; i++) {
                if(tempArray[i].id === temp.id ){
                    tempArray[i] = temp;
                }
                
            }

            localStorage.setItem('todo', JSON.stringify([...tempArray]));
            console.log([...state.todoList]);

            return {
                ...state,
                todoList: [...tempArray]
            }

        default:
            return state;
        
    }
}

export default reducer