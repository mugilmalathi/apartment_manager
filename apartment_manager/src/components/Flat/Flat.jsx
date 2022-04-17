import axios from "axios";
import { useEffect, useState } from "react";
import "./Flat.css";

export const Flat = ()=>{

    const [list, setList] = useState([])

    useEffect(()=>{
        axios.get(`https://arcane-refuge-75445.herokuapp.com/flat/`)
        .then((res)=>{
            setList(res.data)
        })
    }, [])


    return (
        <div className="main" style={{
           marginTop:"50px" 
        }}>

            <table style={{
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                margin: "auto"
            }}>
                <thead>
                    <tr>
                        <td style={{ border: "1px solid blue", color:"blue" }}>Block</td>
                        <td style={{ border: "1px solid blue", color:"blue" }}>Flat No</td>
                        <td style={{ border: "1px solid blue", color:"blue" }}>Resident Type</td>
                        <td style={{ border: "1px solid blue", color:"blue" }}>Name</td>
                        <td style={{ border: "1px solid blue", color:"blue" }}>Age</td>
                        <td style={{ border: "1px solid blue", color:"blue" }}>Gender</td>
                    </tr>
                </thead>
                {
                    list.map(e =>
                        <tbody>
                            <tr>
                                <td style={{ border: "1px solid blue" }}>{e.block}</td>
                                <td style={{ border: "1px solid blue" }}>{e.flatNo}</td>
                                <td style={{ border: "1px solid blue" }}>{e.residenttype}</td>
                                <td style={{ border: "1px solid blue" }}>{e.Name}</td>
                                <td style={{ border: "1px solid blue" }}>{e.Age}</td>
                                <td style={{ border: "1px solid blue" }}>{e.Gender}</td>
                            </tr>
                        </tbody>
                    )
                }
            </table>


        </div>
    )
}