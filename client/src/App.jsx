import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/Auth/RegisterPage";
import LoginPage from "./pages/Auth/LoginPage";
import UserPage from "./pages/UserPage"

const App = () => {

 

  

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path=":_id" element={<UserPage /> } />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
