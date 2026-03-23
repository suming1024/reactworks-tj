import { useState } from 'react'
import './App.css'
import Dog from './components/Dog'
import Garden from './components/Garden'
import Counter from './components/Counter'
import Car from './components/Car'
import AddProduct from './components/AddProduct'
import Box from './components/Box'


function App() {

  return (
    <>
      <h2>props - 속성 전달</h2>
      {/* <Dog breed="진도믹스" age={3}/>
      <Dog breed="진도믹스" age={1}/> */}
      {/* <Garden/> */}
      {/* <Counter/> */}
      {/* <Car/> */}
      {/* <AddProduct/> */}
      
      {/* 박스 태그 안의 모든 요소가 {children}이다 */}
      <Box>
        <h3>박스 안의 첫번째 내용</h3>
        <p>이건 컴포넌트 안의 내용이 길어질 경우 예시입니다.</p>
      </Box>
      <Box>
        <h3>박스 안의 두번째 내용</h3>
        <p>이건 컴포넌트 안의 내용이 길어질 경우 예시입니다.</p>
      </Box>
    </>
  )
}

export default App
