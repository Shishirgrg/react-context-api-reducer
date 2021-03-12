import React from "react";
import { useTodoContext } from '../context/context'

const TodoList = ({handleInput}) => {
  const [{ todoList }, dispatch] = useTodoContext();

  const deleteTodo = (id)=> {
    // console.log(`Deleted todo with id: ${id}`);
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    })
  }

  const onEditButtonClicked = (id) =>{
    const toBeEditedTodo = todoList.filter((todo) => {
      return todo.id === id
    });   
    
    handleInput(toBeEditedTodo);
  }



  // console.log(todoList);
  return (
    <section>
      {todoList.length <= 0 ? (
        <h1>There is nothing in the list please enter some data</h1>
      ) : (
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>{todo.data}
            <span style={{ marginLeft: "30px" }}><button onClick={()=> deleteTodo(todo.id)}>Delete</button></span>
            <span style={{ marginLeft: "10px" }}><button onClick={()=> onEditButtonClicked(todo.id)}>Edit</button></span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TodoList;
