// import logo from "./logo.svg";
import "./App.scss";
import Landing from "./views/landing";
import { Header, Footer } from "./views/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup, Login, Forgotpwd } from "./views/auth";
// import { useEffect, useState } from "react";

function App() {
  // const [headerBar, setHeaderBar] = useState(true);
  // // const href = window.location.pathname;
  // useEffect(() => {
  //   console.log(window.location.pathname);
  //   window.location.pathname === "/signup" ||
  //   window.location.pathname === "/login" ||
  //   window.location.pathname === "/resetpwd"
  //     ? setHeaderBar(false)
  //     : setHeaderBar(true);
  // }, [window.location.pathname]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="resetpwd" element={<Forgotpwd />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
