import { useState } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

function App() {
  const [name, setName] = useState('');

  function onChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    <div className="App">
      <p>Hola {name}</p>
      <label htmlFor='name'>Nombre: </label>
      <input type="text" name="name" onChange={onChange}/>
      <HelloWorld />
    </div>
  );
}

export default App;
