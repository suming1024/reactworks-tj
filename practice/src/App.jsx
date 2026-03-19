import { useState } from 'react'
import './App.css'
import Example01 from '../src/component/Example01'
import Main from './component/Main'
import Footer from './component/Footer'

function App() {

  const user = "정수민"

  const isLogined=true;
  let message;

  if(isLogined){
    message= <p>성공</p>
  } else {
    message= <p>실패</p>
  }

  return (
    <>
      <h2>리액트 연습문제</h2>
      <div>{user}님 환영합니다</div>
      {/* {isLogined ? <p>성공</p> : <p>실패</p>} */}
      {message}
      <Example01 />
      <Main />
      <Footer />
    </>
  )
}

export default App
