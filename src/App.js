import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
    Switch,
    Route
} from "react-router-dom";

//Styles
import {GlobalStyle} from './GlobalStyle';

//Components
import Header from './components/header';
import HomePage from './pages/Home';
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Layout from "./components/header/Layout";

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
            </Switch>
            <GlobalStyle/>
        </Layout>
    );
}

export default App;


