// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {Switch} from 'react-router-dom';

// let name ="Harry";
//App.js --> mei jo bhi karenge woh humlog ko local host 3000 mei dikhega
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  //Alert is an object
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled.", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success ");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    //JSX-->similar to html with a look of JavaScript
    // <div classNameName="blank">Lovely</div>
    <>
    <Router>
      <Navbar
        title="Hello"
        aboutText="About"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      {/* <Navbar/> */}
      <div className="container my-3">
        <Switch>
          <Route exact path="/about" >
            <About mode={mode}/>
          </Route>

          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter,Character Counter,Remove Extra spaces" mode={mode} />
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>

      {/* <About /> */}
    </Router>
    </>
  );
}
export default App;