import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
export default function Users(){
    const [users , setUsers] = useState([])
    const [runUseEffect , setRun] = useState(0)
    useEffect(() => {
        axios('http://194.32.76.82:44375/gateway/Student/GetAll',{
        })
        .then(data => setUsers(data.data))
        .catch(err => console.log(err))
    },[runUseEffect])
    async function handleDelete(id){
        let res = await axios.delete(`http://194.32.76.82:44375/gateway/Student/Delete/${id}`)
        if(res.status === 200){
            setRun(prev => prev+1)
        }
    }
    const showData = users.map((user,index) => 
        <tr key={index}>
            <td>{index +1}</td>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td>{user.city}</td>
            <td>{user.phoneNumber}</td>
            <td>
                <i className="fa-solid fa-trash" 
                style={{
                    color :'red',
                    fontSize : '18px',
                    marginRight:'8px',
                    cursor:'pointer'
                }}
                onClick={() => handleDelete(user.id)}
                >
                </i>
                <Link to={`${user.id}`} >
                    <i className="fa-solid fa-pen-to-square" 
                    style={{
                        color :'blue',
                        fontSize : '18px',
                        cursor:'pointer'
                    }}
                >
                </i></Link>
            </td>
        </tr>
        )
    return(
        <div style={{width:'80%'}}>
            <div style={{padding:'20px'}}>
                <table >
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showData}
                </tbody>
                </table>
        </div>
        </div>   
    )
}