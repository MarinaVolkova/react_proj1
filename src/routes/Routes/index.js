import {Routes, Route} from "react-router-dom";

import Home from "../../pages/Home/Номе";
import SignIn from "../../pages/login/SignIn";
import SignUp from "../../pages/Signup/SignUp";
import Profile from '../../pages/Profile/Profile';
import Error from '../../pages/Error/Error';


function AppRoutes() {
    return (
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path='*'  element={<Error />} />
      </Routes>
    );
}
  
export default AppRoutes;