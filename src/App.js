import React, { useState, useMemo, memo } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  const doubleNumber = useMemo(() => slowAdding(count), [count]);

  const themeStyle = {
    backgroundColor: darkTheme ? 'black' : 'white',
    color: darkTheme ? 'white' : 'black',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={themeStyle}>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <div>{count}</div>
      <button onClick={() => setDarkTheme(!darkTheme)}>Change Theme</button>
      <div>{doubleNumber}</div>
    </div>
  );
}

const slowAdding = (num) => {
  console.log('reRender');
  for (let i = 1; i < 200000; i++) {
    return num * 2;
  }
};
