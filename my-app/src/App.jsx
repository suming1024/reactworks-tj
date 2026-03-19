import './App.css'
import picture from "./assets/hero.png" 
import Example01 from './component/Example01'
import Example02 from './component/Example02'
import Event from './component/Event'

//버튼 컴포넌트 만들기
function MyBtn (){
  return (
    <>
      <button>목록보기</button>
    </>
  )
}

function App() {

  const season = "봄"

  return (
    <>
      <div>
        <h2 className='headline'>리액트 시작하기</h2>
        {/* <h3
          style={{
            color:'red'
          }}
        >jsx 문법</h3>
        <h3>현재 계절은 {season} 입니당</h3> */}
        {/* <img
        src={picture}
        alt="hero 이미지"
        width="200"
        /> */}
      </div>
      {/* <Example01/> */}
      {/* <Example02/> */}
      <Event/>
      

      {/* <div>
        <p>
          굿 럭 베비<br/>행운을 빌어용
        </p>
        <MyBtn/>

      </div> */}
    </>
  )
}

export default App
