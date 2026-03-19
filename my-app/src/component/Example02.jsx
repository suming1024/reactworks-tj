const Example02=()=>{

    const items = ["사과", "바나나", "우유"];

    return(
        <>
        
            <h2>리스트 렌더링</h2>
            <ul>
                {items.map((items, index)=>(
                    <li key={index}>{items}</li>
                ))}
            </ul>

        </>
    )

}

export default Example02