import React, { useState  , useEffect} from 'react';
import axios from 'axios';

export default function RegisterStudent(props) {

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
                studentId:Number(studentId),
                courseId: Number(courseId),
               
            };

            const res = await axios.post("http://194.32.76.82:44375/gateway/Course/RegisterStudnet", requestData);

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
                <label htmlFor="studentId">Select Student:</label>
                <br/>
                <select
                    id="studentId"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                >
                    <option value={0}>Select a student</option><br/>
                    {students.map((student) => (
                        <option key={student.id} value={student.id}>
                            {student.fullName}
                        </option>
                    ))}
                </select><br/>

                <label htmlFor="courseId">Select Course:</label><br/>
                <select
                    id="courseId"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                >
                    <option value={0}>Select a course</option>
                    {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                            {course.name}
                        </option>
                    ))}
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


