import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter'
import { RootState, store } from './store'
import './App.css'

function App() {
  const count = useSelector( (state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="card">
        <p>Count is {count}</p>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
