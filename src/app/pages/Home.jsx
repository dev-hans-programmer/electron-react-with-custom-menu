import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Home.css';

function Home() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prev) => prev + 1);
  }

  function decrement() {
    setCounter((prev) => prev - 1);
  }

  const notify = async () => {
    const value = await window.common.printName('Hasan');
    toast.info(value);
  };

  return (
    <div className='home'>
      <p>Chrome version {versions.chrome()}</p>
      <p>Node version {versions.node()}</p>
      <p>Counter {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={notify}>Notify!</button>
    </div>
  );
}

export default Home;
