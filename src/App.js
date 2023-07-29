import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Jobs from "./pages/Jobs";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewTask from "./pages/NewTask";
import CreateListing from "./pages/CreateListing";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const userData = await JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    };
    getUser();
  }, [navigate]);

  return (
    <div className="">
      <Header />
      <div className="container mx-auto px-32">
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {user && <Route path="/new-task" element={<NewTask />} />}
          {user && <Route path="/create-listing" element={<CreateListing />} />}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
