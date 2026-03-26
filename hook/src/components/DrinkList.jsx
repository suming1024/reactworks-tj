const DrinkList=({drinks})=>{

    return(
        <>
            <div>
                <h3>음료목록</h3>
                <ul style={{listStyle:"none"}}>
                    {drinks.map((drink, index)=>(
                        <li key={index}>{drink}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default DrinkList