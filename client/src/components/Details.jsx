import { useState,useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const Details =(props)=>{
    const [details,setDetails] = useState({})
    const {index} = useParams();
    const Navigate = useNavigate()
    console.log(index)
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${index}`)
            // .then(response => console.log(response.data))
            .then(response => setDetails(response.data))
            .catch(err=>console.log(err))
    }, []);
    const Delete =()=>{
        axios.delete(`http://localhost:8000/api/users/${index}`)
        // .then(response => console.log(response.data))
        .then(response =>{Navigate("/")})
        .catch(err=>console.log(err))
    }
    return <>
    <h2> {details.firstName} {details.lastName} <button onClick={Delete}> Delete</button> </h2>
    </>
}
export default Details