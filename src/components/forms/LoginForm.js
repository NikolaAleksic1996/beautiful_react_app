import  { useState} from "react";
import * as authService from '../services/auth';
import "./LoginForm.model.css";
import {Redirect} from "react-router-dom";

function LoginForm() {
    const [email, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async e => {
        e.preventDefault();

        await authService.login(email, password);

        setRedirect(true)
    };

    if (redirect) {
        return <Redirect to='/profile'/>;
    }

    // const getuser = async e => {
    //     const data = await getUser();
    //     console.log(data);
    // }

    return (

        <div className='App'>
            {/*<button onClick={getuser}>*/}
            {/*    user*/}
            {/*</button>*/}
            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        required
                        onChange={e => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        required
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </div>

        // <Card>
        //     <form className="form" onSubmit={submitHandler}>
        //         <div className='control'>
        //             <label htmlFor='title'>Username</label>
        //             <input
        //                 type='text'
        //                 required
        //                 id='title'
        //                 name='email'
        //                 value={email}
        //                 placeholder="Username"
        //                 onChange={e => setUsername(e.target.value)}
        //             />
        //         </div>
        //         <div className='control'>
        //             <label htmlFor='password'>Password</label>
        //             <input
        //                 type='password'
        //                 required
        //                 id='password'
        //                 name='password'
        //                 value={password}
        //                 placeholder="Password"
        //                 onChange={e => setPassword(e.target.value)}
        //             />
        //         </div>
        //         <div className='actions'>
        //             <button>Log In</button>
        //         </div>
        //     </form>
        // </Card>
    );
}

export default LoginForm;