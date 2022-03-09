import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import DisplayMessage from "./components/display-message";
import LoginPage from "./components/login";
import RegisterPage from "./components/register";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import MailPage from "./pages/mail";

import InboxPage from "./pages/mail/inbox";
import SentPage from "./pages/mail/sent";
import TrashPage from "./pages/mail/trash";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/style.css";

class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage></LoginPage>}></Route>
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="about" element={<AboutPage></AboutPage>}></Route>
            <Route path="contact" element={<ContactPage></ContactPage>}></Route>
            <Route path="signup" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="mail" element={<MailPage></MailPage>}>
              <Route path="inbox" element={<InboxPage></InboxPage>}></Route>
              <Route path="sent" element={<SentPage></SentPage>}></Route>
              <Route path="trash" element={<TrashPage></TrashPage>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;