import React from 'react';
import { useState } from 'react';
import Body from './components/Body.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Body/>
    </>
  )
}

export default App
