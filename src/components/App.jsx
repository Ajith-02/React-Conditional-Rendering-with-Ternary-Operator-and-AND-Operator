import React from "react";
import Login from "./Login";

var isLogin = false;

const CurrentTime = new Date().getHours();
console.log(CurrentTime);

function App() {
  return (
    <div className="container">
      {isLogin === true ? <h1>Hello</h1> : <Login />}
      {CurrentTime < 3 && <h1>Go to Sleep</h1>}
    </div>
  );
}

export default App;
