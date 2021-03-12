import React, {useState, useRef, useEffect} from 'react'
import { useTodoContext } from '../context/context'
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList'

const TodoListForm = () => {
    const [{}, dispatch] = useTodoContext();

    const inputRef = useRef("");

    const [todoData, setTodoData] = useState("");
    const [todoDataTemp, setTodoDataTemp] = useState("");
    // const [todoList, setTodoList] = useState([]);

    useEffect(() =>{
        inputRef.current.focus();

        return () =>{
            console.log("Use effect ended!");
        }
        
    }, []);

    const changeHandler = (e)=> {
        setTodoData(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(!todoData){
            alert("Please enter a data")
            return;
        }
        
        if(todoDataTemp !== ""){
            dispatch({
                type: "UPDATE_TODO",
                payload: {id: todoDataTemp.id, data: todoData}
            })

            setTodoDataTemp("")

        }else {
            dispatch({
                type: "ADD_TODO",
                payload: {id: uuidv4(), data: todoData}
            })
        }
       

        // console.log(todoData);
        setTodoData("")
    }


    const onEditButtonClicked = (editValue) => {
        inputRef.current.focus();
        setTodoDataTemp(editValue[0]);
        setTodoData(editValue[0].data);
    }

    return (
        <>
        <section>
            <form onSubmit={submitHandler}>
                <input ref={inputRef} type="text" value={todoData} onChange={changeHandler} />
            </form>
        </section>
        <TodoList handleInput={onEditButtonClicked} />
        </>
    )
}

export default TodoListForm
