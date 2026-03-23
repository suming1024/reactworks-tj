import { useState } from "react"

const AddProduct=()=>{

    //상품 상태 관리
    const [productName,setProductName]=useState("");

    //상품을 저장할 배열 상태 관리
    const [products,setProducts]=useState([]);

    //상품명 상태 함수
    const handleInputChange=(e)=>{
        setProductName(e.target.value);
    }

    //상품 추가
    const handleAddProduct=()=>{

        //상품을 입력하지 않았을 때 유효성 검사 해주는것
        //trim() : 스페이스로 공백생겨도 안넘어가줌 null 이 생기게 안함
        if(productName.trim() === ''){
            alert("상품 이름을 입력해주세요!");
            return;
        }

        const newProducts=[...products, 
            //id는 고유한 값이 필요해서 Date.now() 사용
            {id: Date.now(), name: productName}]
            console.log("상품 목록:", newProducts);
            setProducts(newProducts);
    }

    //상품 삭제 함수
    const handleDeleteProduct=(id)=>{
        //filter() : 걸러내는 것 삭제를 시키는게 아니라 삭제할 상품을 제외한 새로운 상품 배열을 생성! 필터링
        setProducts(products.filter(product => product.id !==id))
    }

    return(
        <>
            <div>
                <h2 style={{ fontWeight: "800", fontSize: "24px" }}>상품 추가</h2>
                <input 
                type="text" 
                placeholder="상품 이름 입력"
                value={productName}
                onChange={handleInputChange}/>{` `}

                <button onClick={handleAddProduct}>추가</button>

                <div>
                    <h3 style={{ fontWeight: "800", fontSize: "18px" }}>추가된 상품 목록</h3>

                    {products.length === 0 ? 
                    (<p>추가된 상품이 없습니다</p>) : (
                        <ul style={{ listStyle:"none" }}>
                        {products.map((product)=>(
                            <li key={product.id}>
                                {product.name}{` `}
                                <button onClick={()=>handleDeleteProduct(product.id)}
                                    style={{ margin:"0 0 8px 8px", color:"red" }}>삭제</button>
                            </li>
                        ))}
                    </ul>
                    )}
                    
                </div>
            </div> 
        </>
    )
}

export default AddProduct