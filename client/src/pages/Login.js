import React from "react";
import Jumbotron from "../components/Jumbotron";
import LoginForm from './components/LoginForm';

const Login = () =>
<div className='container-fluid'>
    <Jumbotron>
        <LoginForm />
    </Jumbotron>
</div>;

export default Login;
