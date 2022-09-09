import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {

  return (
    <button onClick={ props.reset }>
      { props.children }
    </button>
  );
};

const Application = () => {

  const [name, setName] = useState(``);

  const reset = () => {
    setName('');
    console.log("name has been reset");
  };

  return (
    <main>
      <input value={ name } onChange={(event) => setName(event.target.value)} placeholder='Type Your Name'></input>
      <Button reset={reset}>Reset</Button>
      {name && <h1>Hello { name }</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));