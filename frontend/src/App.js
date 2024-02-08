import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, Profile, Register, ResetPassword } from "./pages";
import { useSelector } from "react-redux";
import useLocalStorage from "use-local-storage";

function Layout() {
  const { user } = useSelector(({ AppSlice }) => AppSlice);
  const location = useLocation();
  console.log({ user });
  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ form: location }} replace />
  );
}

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  return (
    <div data-theme={theme} className="w-full min-h-[100vh] app">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Home theme={theme} setTheme={setTheme} />}
          />
          <Route path="/profile/:id?" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
