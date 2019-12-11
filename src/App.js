import React from 'react';
import Body from "./component/body.js";
import { Provider } from 'mobx-react';
import studentsStore from "./store/store.js";
// import { observer } from "mobx-react-lite";
import './App.css';

const App = () => {

  return (
    <Provider studentsStore = {studentsStore}>
    <div className="App">
    <div className="container">
      <header>Simple Form</header>
      <Body />
    </div>
  </div>
  </Provider>
  )

}

export default App;
