import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return(
        <div style={{
            width: "100%",
            height: "55px",
            backgroundColor:"blue",
            display: "flex"
        }}>
            <h4 style={{paddingLeft:"30px"}}><Link style={{ textDecoration: "none", color: "white"}}  to="/">Home</Link></h4>
            <h4 style={{paddingLeft:"1100px"}}><Link style={{ textDecoration: "none", color: "white" }} to="/flat">Flat</Link></h4>
           
            <button style={{
                width:"80px",
                height: "40px",
                marginTop:"8px",
                marginLeft:"30px",
                backgroundColor:"blue",
                fontWeight:"bold",
                border: "1px solid white"
            }}><Link style={{ textDecoration: "none", color: "white" }} to="/signin">SignIn</Link></button>
        </div>
    )
}