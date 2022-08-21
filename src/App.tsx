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
import { AuthProvider } from "./components/auth/Auth";
import RequireAuth from "./components/auth/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/suggestions"
            element={
              <RequireAuth>
                <Suggestions />
              </RequireAuth>
            }
          />
          <Route
            path="/history/:date"
            element={
              <RequireAuth>
                <History />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
