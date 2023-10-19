import React, { useState } from 'react';
import axios from 'axios';
export default function NewAttendance(props) {
    const [fullName, setFullName] = useState("");
    const [attendancePercentage, setAttendancePercentage] = useState("");
    const [attendanceDate, setAttendanceDate] = useState("");

    async function submitData(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://194.32.76.82:44375/gateway/Attendance/NewAttendance", {
                fullName: fullName,
                attendencePercentage: Number(attendancePercentage), // تحويل النسبة إلى عدد (اختياري)
                attendenceDate: new Date(attendanceDate), // تحويل التاريخ إلى كائن تاريخ (اختياري)
            });
    
            if (res.status === 200) {
                window.location.pathname = '/dashboard/user/studentsAttendance';
            }
        } catch (error) {
            console.log(error.response.status);
        }
    }
    return(
        <div>
            <form style={{
                margin:'10px'
                }}>
        <label htmlFor="name">Name:</label><br />
<input
    type="text"
    id="name"
    placeholder="Name..."
    value={fullName}
    onChange={(e) => setFullName(e.target.value)}
/>

<label htmlFor="attendancePercentage">Attendance Percentage:</label>
<input
    type="text"
    id="attendancePercentage"
    placeholder="Attendance Percentage..."
    value={attendancePercentage}
    onChange={(e) => setAttendancePercentage(e.target.value)}
    style={props.hasInput }
/>

<label htmlFor="attendanceDate">Attendance Date:</label>
<input
    type="text"
    id="attendanceDate"
    placeholder="Attendance Date..."
    value={attendanceDate}
    onChange={(e) => setAttendanceDate(e.target.value)}
    style={props.hasInput }
/>
<button onClick={submitData}>new attend</button>
            </form>
        </div>
    )
}