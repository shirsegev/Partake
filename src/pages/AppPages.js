import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn"
import Home from "./Home";
import AddPost from "../components/AddPost";
import AboutPage from "../pages/AboutPage"
import ProfilePage from "../pages/ProfilePage"

// whats up
function Pages() {
    return (
      <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    );
  }
  
  export default Pages;
  

