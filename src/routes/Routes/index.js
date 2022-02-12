import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import List from "../../components/List";


function AppRoutes() {

  return (
    <Routes>
      <Route path="/" exact element={<List />} />
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