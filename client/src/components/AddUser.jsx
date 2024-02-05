import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate} from "react-router-dom";

const AddUser = ()=>{
    const navigate = useNavigate();
   const [firstName,setfirstName] = useState("")
   const [lastName,setlastName] = useState("")
    const AddUser=(e)=>{
        e.preventDefault()
        console.log("test")
        axios.post('http://localhost:8000/api/users',{firstName,lastName}).then(response=>{
        console.log(response);
        navigate("/");
})
    }

    return(
        <>
        <h2>Add an user</h2>
        <form action="" onSubmit={AddUser}>
        <div>
            <label htmlFor="">firstName</label>
            <input type="text" placeholder="firstName" value={firstName}  onChange={(e)=> setfirstName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">lastName</label>
            <input type="text" placeholder="lastName" value={lastName} onChange={(e)=> setlastName(e.target.value)} />
        </div>
        <button type="submit"> Add User  </button>
        </form>
        </>
    )
}
export default AddUser