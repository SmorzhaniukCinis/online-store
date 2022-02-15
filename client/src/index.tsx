import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DeviseStore from "./store/DeviseStore";

export const Context = createContext(null as any)

ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          user: new UserStore(),
          devices: new DeviseStore()
      }}>
          <App />
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

