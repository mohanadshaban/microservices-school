
import { NavLink } from "react-router-dom";

export default function SideBar(){
    
    return(
        <div style={{width:'30%'}}>
            <div className="side-bar">
                <NavLink activeClassName  to='/dashboard/users' 
                    className="item-link" >
                        <i className="fa-solid fa-users-line"></i>
                    Students</NavLink>
                    <NavLink activeClassName to='/dashboard/user/create' 
                    className="item-link" >
                        <i className="fa-solid fa-user-plus"></i>
                    New Students</NavLink>
                    <NavLink activeClassName to='/dashboard/user/studentsAttendance' 
                    className="item-link" >
                        <i className="fa-solid fa-user-plus"></i>
                        Students Attendance</NavLink>
                        <NavLink activeClassName to='/dashboard/user/createAttendance' 
                    className="item-link" >
                        <i className="fa-solid fa-user-plus"></i>
                        Create Attendance</NavLink>
                        <NavLink activeClassName to='/dashboard/user/courses' 
                    className="item-link" >
                        <i className="fa-solid fa-user-plus"></i>
                        Courses</NavLink>
                        <NavLink activeClassName to='/dashboard/user/addcourse' 
                    className="item-link" >
                        <i className="fa-solid fa-user-plus"></i>
                        Add Course</NavLink>
                        <NavLink activeClassName to='/dashboard/user/registerStudent' 
                    className="item-link" >
                        <i className="fa-solid fa-user-plus"></i>
                        RegisterStudent</NavLink>
                        <NavLink activeClassName to='/dashboard/user/studentCourses' 
                    className="item-link" >
                        <i className="fa-solid fa-user-plus"></i>
                        studentCourses</NavLink>
            </div>
        </div>
    )
}