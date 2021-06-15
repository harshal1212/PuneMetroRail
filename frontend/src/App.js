import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./component/Home/Homepage";
import Login from './component/Login/Login';
import UserHome from './component/User/UserHome';
import AdminHome from './component/Admin/AdminHome';
import ManageStation from './component/Admin/ManageStation/ManageStation';
import EditStation from './component/Admin/ManageStation/EditStation';
import ManageRoute from './component/Admin/ManageRoute/ManageRoute';
import BookPage from './component/User/BookPage';
import Metrocard from './component/User/Metrocard';
import FourOFour from './component/FourOFour/FourOFour';
import PaymentPage from './component/User/PaymentPage';
import Loading from './component/User/Loading';
import Recharge from './component/User/Recharge';
import Feedback from './component/Admin/Feedback/Feedback';
import Signup from './component/User/Signup';


function App() {

  // let [user, setUser] = useState("");

  // let getUserData = () => {
  //   console.log("Hello APP.JS", localStorage.getItem("roleObj"))
  //   setUser(localStorage.getItem("roleObj"));
  // }

  // useEffect(() => {
  //   getUserData();
  // }, [user]
  // )

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        {/* {!user ? <div> */}
        <Route path="/login" component={Login}></Route>

        {/* </div> : <div> */}

        {/************ user path ************/}
        <Route path="/user" component={UserHome}></Route>
        <Route path="/book-page" component={BookPage}></Route>
        <Route path="/metrocard" component={Metrocard}></Route>
        <Route path="/proceed-payment" component={PaymentPage}></Route>
        <Route path='/loading' component={Loading}></Route>
        <Route path='/recharge' component={Recharge}></Route>
        <Route path='/user-signup' component={Signup}></Route>


        {/************ admin path ************/}
        <Route path="/admin" component={AdminHome}></Route>
        <Route path="/manage-station" component={ManageStation}></Route>
        <Route path="/edit-station" component={EditStation}></Route>
        <Route path="/manage-route" component={ManageRoute}></Route>
        <Route path="/feedback" component={Feedback}></Route>

        {/* </div>
        } */}

        {/************ FourOFour  ************/}
        <Route path="**" component={FourOFour}></Route>

      </Switch>

    </Router>
  );
}

export default App;
