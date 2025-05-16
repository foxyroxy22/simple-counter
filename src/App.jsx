import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const times10 = () => {
    setCount(count * 10);
  }
  const plus10 = () => {
    setCount(count + 10);
  }
  const reset = () => {
    setCount(0);
  }
  const minus10 = () => {
    setCount(count - 10);
  }
  const divideBy10 = () => {
    setCount(count / 10);
  }

  return (
    <>
      <div className="wrap">
        <h1>Simple Counter</h1>
        <p className='number'>{count}</p>

        <div className="count_btn">
          <button type='button' onClick={times10}>x 10</button>
          <button type='button' onClick={plus10}>+ 10</button>
          <button type='button' className='reset' onClick={reset}>RESET</button>
          <button type='button' onClick={minus10}>- 10</button>
          <button type='button' onClick={divideBy10}>/ 10</button>
        </div>
      </div>
      {/* .wrap */}
    </>
  )
}

export default App
