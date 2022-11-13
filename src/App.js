import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from "../src/components/Navbar";
import AppRouter from "../src/components/AppRouter";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "../src/components/Loader";

const App = () => {
  const {auth} = useContext(Context)
  const [loading] = useAuthState(auth)

  if (loading) {
    return <Loader/>
  }

  return (
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
  );
};

export default App;
