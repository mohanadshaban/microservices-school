import { useEffect, useState } from "react"
import axios from 'axios'
function UpdateUser(){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passConfirm,setPassConfirm] = useState("")
    const [errorEmail , setErrorEmail] = useState("")
    const id = window.location.pathname.split("/").slice(-1)[0]
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
        .then(res => res.json())
        .then(data => {
            setName(data[0].name)
            setEmail(data[0].email)
        })
    },[])
    async  function submitData(e){
        e.preventDefault()
        try {
        let res = await axios.post(`http://194.32.76.82:44375/gateway/Student/Update/${id}`,{
                name:name,
                email:email,
                password:password,
                password_confirmation:passConfirm
            })
        }
        catch(error){
            setErrorEmail(error.response.status)
        }
    };
    
    return(
        <div>
        <div className="father">
            <form onSubmit={submitData} >
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                    id="name" 
                    placeholder="Name..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                { /*name === "" && accept && 
                <p>this field is required</p>*/} 
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Email..."
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                {/*accept && errorEmail === 422 && <p>this Email is already been taken</p>*/}
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Password..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}

                />
                {/*password.length < 8 && accept && <p>password must be more than 8 characters</p>*/}
                <label htmlFor="passConfirm">Password Confirm:</label>
                <input 
                    type="password" 
                    id="passConfirm" 
                    placeholder="Password Confirm..."
                    value={passConfirm}
                    onChange={e => setPassConfirm(e.target.value)}
                />
                {/*password !== passConfirm && accept && <p>password does not match</p>*/}
                <button>Update User</button>
            </form>
        </div>
        </div>
    )
}
export default UpdateUser