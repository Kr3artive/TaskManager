import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import { UserProvider } from "./contexts/UserDetails";
import Home from "./Pages/Home";
import AddPriority from "./Pages/AddPriority";
import AddSchedule from "./Pages/AddSchedule";
import Profile from "./Pages/Profile";
import Priority from "./Pages/Priority";
import Schedule from "./Pages/Schedule";
const App = () => {
  return (
    <div>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home/>} />
             <Route path="/addpriority" element={<AddPriority/>} />
             <Route path="/addschedule" element={<AddSchedule/>}/>
             <Route path="/priorities" element={<Priority/>}/>
             <Route path="/scheduled" element={<Schedule/>}/>
             <Route path="/profile" element={<Profile/>} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
