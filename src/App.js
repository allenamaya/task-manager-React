import {Routes, Route, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import AddTask from "./components/addTask";
import TaskItem from "./components/taskItem";
import Login from "./views/login";
import LandingPage from "./views/landingPage";

function App() {
  const [user, setUser] = useState({})

  const navigate = useNavigate()
  useEffect(() => {

    const user_id = localStorage.getItem('user_id')
    user_id?navigate("/"):navigate("/login")
  }, [])
  return (
      <div>
        <Header />
        <Routes>
          <Route exact path = '/' element = {<LandingPage user = {user} />}/>
          <Route exact path = '/tasks' element = {<TaskItem />}/>
          <Route exact path = '/login' element = {<Login setUser = {setUser}/>} />
          <Route exact path = '/addtask' element = {<AddTask />}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
