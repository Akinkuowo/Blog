import React from 'react';
import useForm from 'react-hook-form';

import Logo from '../../../../images/Logo.png';

const LoginForm = ({  onRouteChange }) => {

const { register, handleSubmit, errors} = useForm();
const onSubmit = (data) => {
    console.log(data);
}
 

    return(
        <div className="columns header-container">
            <div className="column">
                <img src={Logo} alt="" />
            </div>

            <div className="column login">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="columns">
                        <div className="column login-form">
                            <input type="text" name="email" placeholder="email-address" ref={register({ required: true })} />   
                            {errors.email && <p className="errors">This Field is Required</p>}
                        </div>
                        <div className="column login-form">
                            <input type="text" name="password" placeholder="Password" ref={register({ required: true})}/>
                            {errors.password && <p className="errors">This Field is Required</p>}   
                        </div>
                        <div className="column login-form">
                             <button onClick={() => onRouteChange('homepage')} type="submit">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;