import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    const location = useLocation();
    const history=useHistory();
    const Redirect_uri= location.state?.from || '/shop';
    console.log(location.state?.from)
    const handleGoogleLogin= () => {
        signInUsingGoogle()
        .then(result=>{
            history.push(Redirect_uri);
        })
    }
    return (
        <div className="login-form">
           <div>
           <h2>Login</h2>
            <form onSubmit="">
                <input type="email" placeholder="your email" />
                <br />
                <input type="password" placeholder="your password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>New to ema -john ?<Link to="/register">Create your account</Link></p>
            <div>----------or---------------</div>
            <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
           </div>
        </div>
    );
};

export default Login;