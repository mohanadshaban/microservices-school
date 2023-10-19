import { useEffect, useState } from "react"
import axios from 'axios'
function FormBase(props){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [city,setCity] = useState("")
    const [phoneNumber,setPhone] = useState("")
    const [emailerr , setErrorEmail] = useState("")
    const [selectedClassId, setSelectedClassId] = useState(1);
    const inputStyle = {
        width : '95%'
    }
async  function submitData(e){
        e.preventDefault()
        try {
        let res = await axios.post("http://194.32.76.82:44375/gateway/Student/Admission",{
                fullName:name,
                email:email,
                city:city,
                phoneNumber:phoneNumber,
                classId: selectedClassId,

            });
        if(res.status === 200){
            window.localStorage.setItem("email" , email)
            window.location.pathname = '/dashboard/users'
        }
        }
        catch(error){
            setErrorEmail(error.response.status)
        }
    };
    
    return(
        <div>
        <div className="father" >
            <form onSubmit={submitData} >
                <label htmlFor="name">Name:</label>
                <input 
                type="text" 
                    id="name" 
                    placeholder="Name..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    style={props.hasInput && inputStyle}
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
                    style={props.hasInput && inputStyle}
                />
                {/*accept && errorEmail === 422 && <p>this Email is already been taken</p>*/}
                <label htmlFor="city">City:</label>
                <input 
                    type="text" 
                    id="city" 
                    placeholder="city..."
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    style={props.hasInput && inputStyle}
                />
                {/*password.length < 8 && accept && <p>password must be more than 8 characters</p>*/}
                <label htmlFor="phoneNumber">phone Number:</label>
                <input 
                    type="number" 
                    id="phoneNumber" 
                    placeholder="phone number..."
                    value={phoneNumber}
                    onChange={e => setPhone(e.target.value)}
                    style={props.hasInput && inputStyle}
                />
                <label htmlFor="classId">ClassId</label>
            <select
                id="classId"
                value={selectedClassId}
                onChange={(e) => setSelectedClassId(e.target.value)}
            >
                <option value="1">1</option>
            </select>
      
                {/*password !== passConfirm && accept && <p>password does not match</p>*/}
                <button>{props.button}</button>
            </form>
        </div>
        </div>
    )
}
export default FormBase