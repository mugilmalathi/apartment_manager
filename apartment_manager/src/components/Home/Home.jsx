import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Flat } from "../Flat/Flat"
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButton"

export const Home = ()=>{

    const [list, setList] = useState([])

    const [page, setPage] = useState(1);


    useEffect(()=>{
        getData();
    }, [page]);

    const getData = () =>{
        axios.get(`https://arcane-refuge-75445.herokuapp.com/flat?_limit=3&_page=${page}`)
        .then((res)=>{
            setList(res.data);
        })
    }

    function handleSort(nameBy, order) {
        if (nameBy === 'residenttype' && order === 1)
            setList((prev) =>
                [...prev.sort((a, b) => a.country > b.country ? 1 : -1)])
        else if (nameBy === 'residenttype' && order === -1)
            setList((prev) =>
                [...prev.sort((a, b) => a.country > b.country ? -1 : 1)])
        else if (nameBy === 'flatNo' && order === 1)
            setList((prev) =>
                [...prev.sort((a, b) => a.flatNo > b.flatNo ? 1 : -1)])
        else if (nameBy === 'flatNo' && order === -1)
            setList((prev) =>
                [...prev.sort((a, b) => a.flatNo > b.flatNo ? -1 : 1)])
    }


    return(
        <div>
            
            <div className="searchBar" 
                 style={{
                     display: "flex",
                     marginBottom:"30px"
                 }}>
                <input style={{
                    height: "30px",
                    width:"250px",
                    marginLeft: "530px",
                    marginTop: "30px",
                    border: "1px solid blue"
                }} 
                id="search" 
                type="text" 
                placeholder="searchbox"
                />

                <button style={{
                    width:"80px",
                    height: "30px",
                    marginTop:"32px",
                    marginLeft:"10px",
                    backgroundColor:"white",
                    fontWeight:"bold",
                    border: "1px solid blue",
                    color: "blue"
                }} 
                id="submit"
                onClick={(type)=>{
                   
                }}
                >Search</button>
            </div>

            <SortAndFilterButtons
                handleSort={handleSort}
            />

            <h1 style={{textAlign:"center"}}>Table for Apartments</h1>
           <table style={{
               boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
               margin: "auto",
               marginBottom:"30px"
           }}>
               <thead>
                   <tr>
                       <td style={{border:"1px solid blue", color:"blue"}}>Id</td>
                       <td style={{border:"1px solid blue", color:"blue"}}>Block</td>
                       <td style={{border:"1px solid blue", color:"blue"}}>Flat No</td>
                       <td style={{border:"1px solid blue", color:"blue"}}>Total Flats</td>
                       <td style={{border:"1px solid blue", color:"blue"}}>Resident Type</td>
                       <td style={{border:"1px solid blue", color:"blue"}}>View</td>
                   </tr>
               </thead>
               {
                   list.map(e=>
                       <tbody>
                           <tr>
                               <td style={{ border: "1px solid blue" }}>{e.id}</td>
                               <td style={{ border: "1px solid blue" }}>{e.block}</td>
                               <td style={{ border: "1px solid blue" }}>{e.flatNo}</td>
                               <td style={{ border: "1px solid blue" }}>{e.totalNo}</td>
                               <td style={{ border: "1px solid blue" }}>{e.residenttype}</td>
                               <td style={{ border: "1px solid blue" }}>
                                   <Link to="/flat">
                                       <button style={{
                                       marginLeft: "20px",
                                       backgroundColor: "blue",
                                       border: "1px solid blue",
                                       width: "70px",
                                       height: "25px",
                                       borderRadius: "5px",
                                       cursor: "pointer",
                                       color: "white"
                                   }}

                                   >View</button>
                                       </Link></td>
                           </tr>
                       </tbody>
                    )
               }
           </table>

          
            <button style={{
                marginRight:"150px"
            }} onClick={() => {
                setPage(page - 1);
            }}>Prev</button>
            <button onClick={() => {
                setPage(page + 1);
            }}>Next</button>
           



        </div>
    )
}