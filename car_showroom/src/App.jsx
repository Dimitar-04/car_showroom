import { useState } from 'react';
import Landing from './landing';
import Engine from './engine';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Landing />
    </>
  );
}

export default App;
