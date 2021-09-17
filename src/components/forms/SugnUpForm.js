import { useState} from 'react';
import * as authService from "../services/auth";
import Card from "../ui/Card";


function SignUpForm() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async e => {
        e.preventDefault();

        const data = await authService.signUp(name, surname, username, password)

        //setAuthToken(data.access.token)
        //const token = localStorage.getItem('tokens');
        console.log(data);
    }

    return (
        <Card>
            <form className="form" onSubmit={submitHandler}>
                <div className='control'>
                    <label htmlFor='title'>Name</label>
                    <input
                        type='text'
                        required
                        id='title'
                        name='name'
                        value={name}
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='control'>
                    <label htmlFor='title'>Surname</label>
                    <input
                        type='text'
                        required
                        id='title'
                        name='surname'
                        value={surname}
                        placeholder="Surname"
                        onChange={e => setSurname(e.target.value)}
                    />
                </div>
                <div className='control'>
                    <label htmlFor='title'>Username</label>
                    <input
                        type='text'
                        required
                        id='title'
                        name='email'
                        value={username}
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
                    <button>Sign Up</button>
                </div>
            </form>
        </Card>
    );
}

export default SignUpForm;