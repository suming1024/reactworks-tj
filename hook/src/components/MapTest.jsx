export default function MapTest(){

    //배열
    const carts=["장난감","간식","사료"]
    console.log(carts[0]);
    
    //객체
    const products=[
        {id:1, name:"정반달"},
        {id:2, name:"정밤비"},
        {id:3, name:"정방구"}
    ]

    return(
        <>
            <div>
                <h2>Map Test</h2>
                <ul style={{listStyle:"none", padding:"0"}}>
                    {carts.map((cart,index)=>(
                        <li key={index}>{index+1}. {cart}</li>
                    ))}
                </ul>
                <ul style={{listStyle:"none", padding:"0"}}>
                    {products.map((product)=>(
                        <li key={product.id}>{`${product.id}. ${product.name}`}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}