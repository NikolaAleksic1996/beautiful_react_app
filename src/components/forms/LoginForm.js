import  { useState} from "react";
//Components
import Card from "../ui/Card";
//Services
import * as authService from '../services/auth';
import {getUser} from '../services/user.service';
import  {getAllCandidates} from '../services/candidate.service';
//Styles
import "./LoginForm.model.css";

function LoginForm() {
    const [email, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async e => {
        e.preventDefault();

        const data = await authService.login(email, password);

        console.log(data);
    }

    return (
        <Card>
            <form className="form" onSubmit={submitHandler}>
                <div className='control'>
                    <label htmlFor='title'>Username</label>
                    <input
                        type='text'
                        required
                        id='title'
                        name='email'
                        value={email}
                        placeholder="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className='control'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        required
                        id='password'
                        name='password'
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='actions'>
                    <button>Log In</button>
                </div>
            </form>
        </Card>
    );
}

export default LoginForm;