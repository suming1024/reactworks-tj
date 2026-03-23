
// export default function Dog(props){

//     // const breed ="진도믹스"
//     const {breed, age} = props//구조 분해 할당-밑에 props 일일히 안적어도돼

//     return <>
//         {/* <div>
//             <h2>강아지</h2>
//             <p>품종: {props.breed}</p>
//             <p>나이: {props.age}</p>
//         </div> */}
//         <div>
//             <h2>강아지</h2>
//             <p>품종: {breed}</p>
//             <p>나이: {age}</p>
//         </div>
//     </>
// }

export default function Dog({breed, age}){


    return <>
        <div>
            <h2>강아지</h2>
            <p>품종: {breed}</p>
            <p>나이: {age}</p>
        </div>
    </>
}