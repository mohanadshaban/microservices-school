import React, { useState  , useEffect} from 'react';
import axios from 'axios';

export default function AddCourse(props) {

    const [studentId, setStudentId] = useState(0);
    const [courseId, setCourseId] = useState(0);

    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // جلب بيانات الطلاب من الـ API
        axios.get("http://194.32.76.82:44375/gateway/Student/GetAll").then((response) => {
            setStudents(response.data);
        });

        // جلب بيانات الكورسات من الـ API
        axios.get("http://194.32.76.82:44375/gateway/Course/GetAll").then((response) => {
            setCourses(response.data);
        });
    }, []);

    async function submitData(e) {
        e.preventDefault();
        try {
            const requestData = {
                name: studentId,
                
            };

            const res = await axios.post("http://194.32.76.82:44375/gateway/Course/Add", requestData);

            if (res.status === 200) {
                window.location.pathname="/dashboard/user/studentCourses"
            }
        } catch (error) {
            console.log(error.response.status);
        }
    }

    return (
        <div>
            <form onSubmit={submitData} style={{margin:'10px'}}>
                <br />
                <label htmlFor="studentId">Course Name</label>
                <br/>
                <input 
                   id="studentId"
                   value={studentId}
                   onChange={(e) => setStudentId(e.target.value)}

                >


                </input>
               
            

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


