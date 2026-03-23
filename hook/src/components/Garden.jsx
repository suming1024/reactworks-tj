function Flower(props){
        return(
            <>
                <div>
                    <h3>{props.color} {props.name} 꽃이 피었어요!</h3>
                </div>
            </>
        )
    }

export default function Garden(){

    return(
        <>
            <h2>정원입니다.</h2>
            <Flower color="빨간" name="진달래" />
        </>
    )
}

