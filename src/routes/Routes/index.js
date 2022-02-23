import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import List from "../../components/List";
import Profile from "../../pages/Profile";
import Profile2 from "../../pages/Profile2";


function AppRoutes() {

  return (
    <Routes>
      <Route path="/" exact element={<List />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile2" element={<Profile2 />} />
      <Route
        path="/login"
        element={
            <Login />
        }
      />
    </Routes>
  )
}

export default AppRoutes;