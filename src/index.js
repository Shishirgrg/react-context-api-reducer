import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TodoProvider } from './context/context'
import reducer, {initialState} from './context/reducer'

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider initialState={initialState} reducer={reducer}>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

