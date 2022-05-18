import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './Components/Pages/AddTask';
import Header from './Components/Pages/Navbar/Header';
import TaskList from './Components/Pages/TaskList';

function App() {
  return (
    <div >
      <Header></Header>
     <Routes>
        
        <Route path="/addtask" element={<AddTask />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </div>
  );
}

export default App;
