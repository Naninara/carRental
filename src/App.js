import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/userFuctionalities/dashboard";

import Cardetails from "./components/userFuctionalities/cardetails";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/userFuctionalities/login";
import Payment from "./components/userFuctionalities/payment";
import Viewstatus from "./components/userFuctionalities/viewstatus";
import Usersignup from "./components/userFuctionalities/usersignup";
import Bookingdetails from "./components/userFuctionalities/bookingdetails";
import Ownersignup from "./components/ownerFunctionalities/ownersignup";
import OwnerDashboard from "./components/ownerFunctionalities/ownerDashboard";
import OwnerCardetails from "./components/ownerFunctionalities/ownerCardetails";
import OwnerviewStatus from "./components/ownerFunctionalities/OwnerviewStatus";
import Ownerviewhistory from "./components/ownerFunctionalities/Ownerviewhistory";
import Ownerpayment from "./components/ownerFunctionalities/Ownerpayment";
import Adminsignup from "./components/AdminFunctionalities/Adminsignup";
import AdminDashboard from "./components/AdminFunctionalities/AdminDashboard";
import ManageOwners from "./components/AdminFunctionalities/manageOwners";
import Manageusers from "./components/AdminFunctionalities/manageusers";
import Allcars from "./components/AdminFunctionalities/allcars";
import Ownerdetails from "./components/AdminFunctionalities/ownerdetails";
import Homepage from "./components/userFuctionalities/homepage";
import Ownerlogin from "./components/ownerFunctionalities/ownerlogin";
import Adminlogin from "./components/AdminFunctionalities/Adminlogin";
function App() {
  let url = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <BrowserRouter basename={url}>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/userlogin" element={<Login />}></Route>
          <Route exact path="/ownerlogin" element={< Ownerlogin/>}></Route>
          <Route exact path="/adminlogin" element={< Adminlogin/>}></Route>

          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/cardetails" element={<Cardetails />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/viewhistory" element={<Viewstatus />}></Route>
          <Route path="/usersignup" element={<Usersignup />}></Route>
          <Route path="/bookinghistory" element={<Bookingdetails />}></Route>

          <Route path="/ownersignup" element={<Ownersignup />}></Route>
          <Route path="/ownerdashboard" element={<OwnerDashboard />}></Route>
          <Route path="/ownercardetails" element={<OwnerCardetails />}></Route>
          <Route path="/ownerviewstatus" element={<OwnerviewStatus />}></Route>
          <Route
            path="/ownerbookinghistory"
            element={<Ownerviewhistory />}
          ></Route>
          <Route path="/ownerpayments" element={<Ownerpayment />}></Route>

          <Route path="/adminsignup" element={<Adminsignup />}></Route>
          <Route path="/admindashboard" element={<AdminDashboard />}></Route>
          <Route path="/allownerdetails" element={<Ownerdetails />}></Route>
          <Route path="/manageowners" element={<ManageOwners />}></Route>
          <Route path="/manageusers" element={<Manageusers />}></Route>
          <Route path="/allcars" element={<Allcars />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
