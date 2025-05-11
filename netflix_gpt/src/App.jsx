import React from 'react';
import { useState } from 'react';
import Body from './components/Body.jsx';
import{ Provider } from 'react-redux';
import store from './utils/store.js';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
    <Body/>
    </Provider>
    </>
  )
}

export default App
