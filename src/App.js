import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

//Styles
import {GlobalStyle} from './GlobalStyle';

//Components
import HomePage from './pages/Home';
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Layout from "./components/header/Layout";
import Profile from './pages/Profile';

//examples
//const Star = () => React.createElement('div', null, 'This is star');

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/login'>
                    <LoginPage />
                </Route>
                <Route path='/sign-up'>
                    <SignUp />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
            </Switch>
            <GlobalStyle/>
        </Layout>
    );
}

export default App;


