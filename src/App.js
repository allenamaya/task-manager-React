import {Routes, Route} from 'react-router-dom'
import AddTask from "./components/addTask";
import Login from "./views/login";
import LandingPage from "./views/landingPage";
import TaskList from "./views/taskList";

function App() {
  return (
      <div>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/task-list" element={<TaskList />} />
        </Routes>
      </div>
  );
}

export default App;
