import "./Signin.css"
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


const initialSignupForm = {
    name: '',
    password: '',
    email: ""
};
const initialLoginForm = {
    name: '',
    password: '',
};


export const Signin = ()=>{
    
    const [signupForm, setSignupForm] = React.useState(initialSignupForm);
    const {name: su_name,password: su_password,email} = signupForm;
    const [loginForm, setLoginForm] = React.useState(initialLoginForm);
    const { name, password } = loginForm;
    const navigate = useNavigate();

    const handleLoginFormChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({ ...loginForm, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios
            .get(`http://localhost:8080/users?name=${name}&password=${password}`)
            .then((res) => {
                let { data } = res;
                if (data.length > 0) {
                    localStorage.setItem('userLoginDetails', JSON.stringify(data[0]));
                    navigate('/');
                }else{
                    alert("Your Credentials Wrong Please enter correct Credentials..!")
                }
            });
    };

    const handleSignupFormChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setSignupForm({ ...signupForm, [name]: checked });
        } else {
            setSignupForm({ ...signupForm, [name]: value });
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();

        let signupFormCopy = {
            name: su_name,
            password: su_password,
            email,
        };
        axios.post('http://localhost:8080/users', signupForm);
    };

    return (
        <div className='loginSignUp'>

            <form className='signUp' onSubmit={handleSignup}>

                <h1>SignUp</h1>
                <label>name</label>
                <br />
                <input
                    type='text'
                    className='name'
                    name='name'
                    value={su_name}
                    onChange={handleSignupFormChange}
                    required
                />
                <br />
                <label>password</label>
                <br />
                <input
                    type='password'
                    className='password'
                    name='password'
                    value={su_password}
                    onChange={handleSignupFormChange}
                    required
                />
                <br />
                <label>email</label>
                <br />
                <input
                    name='email'
                    value={email}
                    type='text'
                    className='email'
                    onChange={handleSignupFormChange}
                />
                <br />
                <button className='submitSignUpForm'>SIGNUP</button>
            </form>



            <form className='login' onSubmit={handleLogin}>
                <h1>Login</h1>
                <label>name</label>
                <br />
                <input
                    type='text'
                    name='name'
                    value={name}
                    className='name'
                    onChange={handleLoginFormChange}
                    required
                />
                <br />
                <label>password</label>
                <br />
                <input
                    type='password'
                    className='password'
                    name='password'
                    value={password}
                    onChange={handleLoginFormChange}
                    required
                />
                <br />
                <button className='submitLoginForm'>SIGNIN</button>
            </form>
        </div>
    )
}