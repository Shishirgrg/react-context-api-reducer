import "./app.css";
import Appbar from "./components/Appbar";
import TodoListForm from "./components/TodoListForm";
import {Typography} from '@material-ui/core'

function App() {
  return (
    <div className="app center">
      <Appbar />
      {/* <h3>This is todo list app using context api and useReducer</h3> */}
      <Typography variant="h4" className="app_heading" >
        Todo list using context api and useReducer
      </Typography>
      <div className="title-underline"></div>
      <TodoListForm />
    </div>
  );
}

export default App;
