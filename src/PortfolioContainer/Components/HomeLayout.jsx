import { Link, Navigate, useOutlet } from "react-router-dom";
import { AppBar } from "./AppBar";



export const HomeLayout = () => {
 
  const outlet = useOutlet();

 

  return (
    <div>
      <AppBar
        pages={[
          { label: "home", path: "/" },
          { label: "login", path: "login" },
          { label: "Profile", path: "profile" }
        ]}
      />
      {outlet}
    </div>
  );
};