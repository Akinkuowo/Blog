import React from 'react';
import useForm from 'react-hook-form';

import './register.css';

const Register = ({ onRouteChange }) => {

    const { register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="columns register-container">
            <div className="column center">
                <h1>WELCOME TO <br />CHAT BOX</h1>
                <p>Connect and chat <br /> with millions of people online.</p>
            </div>

            <div className="column register-content">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign up</h1>
                <label>First Name:</label><br/>
                <input type="text" name="firstName" ref={register({ required: true})}/><br/>
                {errors.firstName && <p className="errors">*This Field is Required*</p>}

                <label>Last Name:</label><br/>
                <input type="text" name="lastName" ref={register({ required: true})}/><br />
                {errors.lastName && <p className="errors">*This Field is Required*</p>}

                <label>Gender:</label><br/>
                <select name="gender" ref={register({ required: true})}>
                    <option>Select...</option>
                    <option>Male</option>
                    <option>Female</option>
                </select><br/>
                {errors.gender && <p className="errors">*This Field is Required*</p>}

                <label>Username:</label><br/>
                <input type="text" name="username" ref={register({ required: true})}/><br />
                {errors.username && <p className="errors">*This Field is Required*</p>}

                <label>Email:</label><br/>
                <input type="email" name="email" ref={register({ required: true})}/><br/>
                {errors.email && <p className="errors">*This Field is Required*</p>}

                <label>Date of Birth:</label><br/>
                <input type="date" name="date" ref={register({ required: true})}/><br/>
                {errors.date && <p className="errors">*This Field is Required*</p>}

                <button onClick={() => onRouteChange('homepage')} type="submit">Sign Up</button>
            </form>
             
            </div>
        </div>
    )
}

export default Register;