import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Jobs from "./pages/Jobs";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewTask from "./pages/NewTask";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <div className="bg-gray-900 h-screen w-full">
      <Header />
      <div className="mt-5 container mx-auto px-16">
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
