import { Routes, Route } from "react-router";
import AboutMe from "../AboutMe/aboutMe";
import {LoginPage}  from "../Login/Login";
import Home from "../Home/Home";
import Contacto from "../ContacMe/contacto";
import {HomeLayout} from "../Components/HomeLayout";
import { ProtectedLayout } from "../Components/ProtectedLayout";
import SettingPage from "../Settings/SettingPage";
import Settings from "../Settings/Settings";


export default function routes() {
 
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/profile" element={<AboutMe />} />
        </Route>
      </Routes>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard/profile" element={<SettingPage />} />
          <Route path="profile  " element={<AboutMe />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}
