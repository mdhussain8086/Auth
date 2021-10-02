import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
    let history = useHistory();
    const initial = {
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',

    }
    const [register, setRegister] = useState(initial);
    const [errorMessage, setErrorMessage] = useState(false);

    const OnlyNumber = (b) => {
        var a = /^\d+$/;
        return a.test(b);
    }

    const handleChange = (e) => {
        console.log(OnlyNumber(e.target.value))
        if (OnlyNumber(e.target.value)) {
            setErrorMessage(false);
        } else {
            setErrorMessage(true);
        }
        setRegister({ ...register, [e.target.name]: e.target.value })

    }

    const handleSubmit = () => {
        let getData = [];
        if (!errorMessage) {
            if (localStorage.getItem('user') !== null) {
                getData = JSON.parse(localStorage.getItem('user'));
            }
            getData.push({
                firstname: register.firstname,
                lastname: register.lastname,
                email: register.email,
                mobile: register.mobile,
            })
            localStorage.setItem("user", JSON.stringify(getData));
            setRegister(initial);
            history.push('/login')
        }

    }

    return (
        <div className="container mt-5 border">
            <h5 className="text-center mt-3">Register</h5>
            <form>
                <div class="form-group">
                    <label for="exampleInputFirstName">First Name</label>
                    <input type="text" name="firstname" value={register.firstname} onChange={handleChange} className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="Enter First Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputLastName">Last Name</label>
                    <input type="text" name="lastname" value={register.lastname} onChange={handleChange} className="form-control" id="exampleInputLastName" aria-describedby="emailHelp" placeholder="Enter Last Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" name="email" value={register.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputMobile1">Mobile Number</label>
                    <input type="email" name="mobile" value={register.mobile} onChange={handleChange} error={OnlyNumber()} className="form-control" id="exampleInputMobile1" aria-describedby="emailHelp" placeholder="Enter Email" />
                    {errorMessage && <small id="emailHelp" class="form-text text-danger">Please Enter Valid Mobile Number!</small>}
                </div>
                <Link to="/login" >I don't have an Account ? </Link><br />
                <button type="button" className="btn btn-success mr-2 mt-2 mb-3" onClick={handleSubmit}>Register</button>
                <button type="button" className="btn btn-danger mt-2 mb-3" onClick={() => setRegister(initial)}>Cancel</button>
            </form>
        </div>
    )
}

export default Register
