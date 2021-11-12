import axios from "axios"
import { useEffect, useState } from "react"

function useDataBase() {
    const [users,setUsers]=useState([]);
    const [error,setError]=useState("");

    useEffect(()=>{
        axios
            .get("http://localhost:5000/users")
            .then(res=>setUsers(res.data))
            .catch(err=>setError(err.code));
    },[])
    

    return {
        DBData:{users,error}
    }
}
export default useDataBase;