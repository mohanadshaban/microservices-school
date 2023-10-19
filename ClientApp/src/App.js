
import { Routes , Route } from "react-router-dom";
import './Style.css';
import './dashboard/Dashboard.css';
import Home from "./Pages/website/Home";
import About from "./Pages/website/About";
import Dashboard from "./dashboard/Dashboard";
import Users from "./dashboard/users/Users";
import UpdateUser from "./dashboard/users/UpdateUser";
import CreateUser from "./dashboard/users/CreateUser";
import StudentsAttendance from "./dashboard/users/StudentsAttendance";
import NewAttendance from "./dashboard/users/NewAttendance";
import Courses from "./dashboard/users/Courses";
import AddCourse from "./dashboard/users/AddCourse";

import RegisterStudent from "./dashboard/users/RegisterStudent";
import StudentCourses from "./dashboard/users/studentCourses";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="users" element={<Users />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="users/:id" element={<UpdateUser />} />
          <Route path="user/studentsAttendance" element={<StudentsAttendance />} />
          <Route path="user/createAttendance" element={<NewAttendance />} />
          <Route path="user/courses" element={<Courses />} />
          <Route path="user/addcourse" element={<AddCourse />} />

          <Route path="user/registerStudent" element={<RegisterStudent />} />
          <Route path="user/studentCourses" element={<StudentCourses />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
