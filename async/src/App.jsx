import './App.css'
import FetchExample01 from './componants/FetchExample01'
import FetchExample02 from './componants/FetchExample02'
import Todos from './todos/Todos'
import AxiosGet from './axios/AxiosGet'
import AxiosGetById from './axios/AxiosGetById'
import AxiosPost from './axios/AxiosPost'

function App() {

  return (
    <>
      <section className='center'>
        {/* <FetchExample01/> */}
        {/* <FetchExample02 id={10}/> */}
        {/* <Todos/> */}
        {/* <AxiosGet/> */}
        {/* <AxiosGetById id={2}/> */}
        <AxiosPost/>
      </section>
    </>
  )
}

export default App
