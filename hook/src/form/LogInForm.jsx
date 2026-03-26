import { useState } from "react"

//임시데이터
const TEMP_USERS=[
        {userName:'admin', password:'00000'},
        {userName:'cloud', password:'a1234'},
        {userName:'taster', password:'taster'}
]

export default function LogInForm(){
    
        const [userId, setUserId]=useState('')
        const [userPW, setUserPW]=useState('')

        //로그인 결과값
        //초기 null,성공 success,실패 fail
        const [result,setResult]=useState(null)

        //아이디 입력 자리
        const handleChangeUserId=(e)=>{
            setUserId(e.target.value);
        }

        //비번 입력 자리
        const handleChangeUserPW=(e)=>{
            setUserPW(e.target.value);
        }

        const handleSubmit=(e)=>{
            e.preventDefault();
        
        //로그인 처리
        //외부에서 입력된 값을 임시데이터와 비교함
        //find((요소)=>{조건}) 근데 {}안써도돼 만약 {}을 쓰면 return해야함
            const matched = TEMP_USERS.find(
                (user) => user.userName === userId.trim() && user.password === userPW.trim()
                // (user) => {return user.userName === userId.trim() && user.password === userPW.trim()}
            );
            if (matched){
                setResult("success");
                console.log(`로그인성공: ${userID}님 환영합니다.`);
            } else{
                setResult("fail")
                console.log(`로그인실패: 아이디 비번 다시 확인해`);
            }
        }

    return(
        <>
            <div>
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                        <p>
                            <input type="text"
                                placeholder="아이디를 입력하세요"
                                value={userId}
                                onChange={handleChangeUserId}
                            />
                        </p>
                        <p>
                            <input type="password"
                                placeholder="비밀번호를 입력하세요"
                                value={userPW}
                                onChange={handleChangeUserPW}
                            />
                        </p>

                        <button type="submit">로그인</button>
                </form>
                
                {/* {result === 'success' && (
                    <p>환영합니다. {userId}님.</p>
                )}
                {result === 'fail' && (
                    <p>로그인실패: 아이디 비번 다시 확인해</p>
                )} */}
                {result === 'success' ? <p>성공</p> : result === 'fail' ? <p>실패</p> : null}

            </div>
        </>
    )
}