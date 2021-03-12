import "./app.css"
import TodoList from "./components/TodoList"
import TodoListForm from "./components/TodoListForm";

function App() {
  return (
    <div className="app center">
      <h3>
        This is todo list app using context api and useReducer
      </h3>
      <TodoListForm/>
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
