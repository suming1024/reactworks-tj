import Card from "./Card";
import Avatar from "./Avatar";
import myImg from "../assets/profileImg.avif"

export default function Profile(){

    return(
        <>
            <h2>Profile</h2>
            <Card>
            <Avatar
                className="avator"
                size = {{
                    width:"300px",
                    height:"200px"
                }}
                person = {{
                    name:"데이지",
                    imageUrl: myImg
                }}
            />
            </Card>
        </>
    )
}