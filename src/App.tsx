import { Navbar } from "./components";
import {
  Dashboard,
  History,
  Landing,
  Settings,
  Signin,
  Signup,
  Suggestions,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/history/:date" element={<History />} />
        <Route path="/profile" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
