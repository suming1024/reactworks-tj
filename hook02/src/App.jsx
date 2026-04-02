import './App.css'
import Counter from './ref/Counter'
import InputFocus from './ref/InputFocus'
import CountReducer from './reducer/CountReducer'
import User from './context/User'

function App() {

  return (
    <section id='center'>
      {/* <Counter/> */}
      {/* <InputFocus/> */}
      {/* <CountReducer/> */}
      <User/>
    </section>
  )
}

export default App
