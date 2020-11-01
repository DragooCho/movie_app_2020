import React from "react";

function Food({ favourite }) {
  return <h1>I love {favourite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!!@#%@%!!!</h1>
      <Food favourite="kimchi" />
      <Food favourite="samkeapsal" />
      <Food favourite="ramen" />
      <Food favourite="chukumi" />
    </div>
  );
}

export default App;
