import { createContext, useReducer,useContext } from 'react'

export const TodoContext = createContext();

export const TodoProvider = ({reducer, initialState, children}) => (
    <TodoContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </TodoContext.Provider>
);

export const useTodoContext = () => useContext(TodoContext);    