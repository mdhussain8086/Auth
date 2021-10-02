import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const initial = {
        email: '',
        password: '',

    }
    const [login, setLogin] = useState(initial);
    const [errorMessageSuccess, setErrorMessageSuccess] = useState(false);
    const [errorMessageDanger, setErrorMessageDanger] = useState(false);

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const handleLogin = () => {
        let isValid;
        if (localStorage.getItem('user') !== null) {
            const user = JSON.parse(localStorage.getItem('user'));
            user.map(item => {
                if (item.email == login.email) {
                    isValid = true; 
                }
            })
            if(isValid == undefined) {
                setErrorMessageSuccess(false);
                setErrorMessageDanger(true);
            }else {
                setErrorMessageSuccess(true);
                setErrorMessageDanger(false);
            }
            
        }else {
            alert('Please Register !');
        }

    }

    

    return (
        <div className="container mt-5 border">
            <h5 className="text-center mt-3">Login</h5>
           {errorMessageSuccess &&  <div class="alert alert-success" role="alert">
                User Login Successfully !
            </div> }
            {errorMessageDanger &&  <div class="alert alert-danger" role="alert">
                User Not Login !
            </div> }
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" name="email" value={login.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <input type="password" name="password" value={login.password} onChange={handleChange} className="form-control" id="exampleInputPassword" aria-describedby="emailHelp" placeholder="Enter Paaword" />
                </div>
                <Link to="/register" >I have already an Account ? </Link><br />
                <button type="button" className="btn btn-success mt-2 mb-3" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login;
