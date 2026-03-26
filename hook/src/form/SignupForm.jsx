import { useState } from "react"

export default function SignupForm(){

    const [userName,setUserName]=useState('');
    const [job,setJob]=useState('직장인');
    const [gender,setGender]=useState('');
    const [text,setText]=useState('');

    const handleSubmit=(e)=>{
        // e.preventDefault(); > 폼 제출시 페이지 새로고침 막음(중요-데이터가남음)
        e.preventDefault();
        console.log(`이름:${userName}`);
        console.log(`직업:${job}`);
        console.log(`성별:${gender}`);
        console.log(`자기소개:${text}`);
    }

    const handleChangeJob=(e)=>{
        setJob(e.target.value)
    }
    const handleChangeGender=(e)=>{
        setGender(e.target.value)
    }
    const handleChangeText=(e)=>{
        setText(e.target.value)
    }


    return(
        <>
            <div>
                <h2>회원 가입 폼</h2>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label>
                            이름{` `}
                        </label>
                        <input type="text" 
                            placeholder="이름을 입력해주세요."
                            value={userName}
                            onChange={(e)=>{setUserName(e.target.value)}}/>
                    </p>
                    <p>
                        <label>
                            직업{` `}
                        </label>
                        <select value={job} onChange={handleChangeJob}>
                            <option value="직장인">직장인</option>
                            <option value="학생">학생</option>
                            <option value="프리랜서">프리랜서</option>
                        </select>
                    </p>
                    <p>
                        <label>
                            성별{` `}
                        </label>
                        <input 
                            type="radio" 
                            value="남자"
                            checked={gender==="남자"}
                            onChange={handleChangeGender}
                        />남자
                        <input 
                            type="radio" 
                            value="여자"
                            checked={gender==="여자"}
                            onChange={handleChangeGender}
                        />여자
                    </p>
                    <p>
                        <label>자기소개{` `}</label>
                        <br/>
                        <textarea
                            style={{resize:"none"}}
                            value={text}
                            onChange={handleChangeText}
                            rows={5}
                            cols={30}
                        ></textarea>
                    </p>
                    
                    
                    {/* form인 경우에는 onclick 이 아니라 type 이다 */}
                    <button type="submit"
                        style={{marginTop:"10px"}}
                    >가입</button>
                </form>


                {/* <ul>
                    <li>이름: <input type="text" /></li>
                    <li>직업: <input type="text" /></li>
                </ul> */}
            </div>
        </>
    )
}