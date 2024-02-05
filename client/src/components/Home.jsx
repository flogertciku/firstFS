import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = ()=>{
    const [people,setPeople]= useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            // .then(response => console.log(response.data))
            .then(response => setPeople(response.data))
            .catch(err=>console.log(err))
    }, []);
    return (
        <>
        <h2>Home</h2>
            {
                people.map((user,index)=>{
                 return   <Link to={`/user/${index}`}><p> {user.firstName}</p></Link> 
                })
            }
        
        </>
    )
}
export default Home