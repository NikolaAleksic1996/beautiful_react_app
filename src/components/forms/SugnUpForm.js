import {useState} from 'react';
import * as authService from "../services/auth";
import {Redirect} from 'react-router-dom';

function SignUpForm() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async e => {
        e.preventDefault();

        //send Request with fetch
        // const response = await fetch('http://localhost:8000/api/register', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         name,
        //         surname,
        //         email,
        //         password
        //     })
        // });
        // const content = await response.json();
        // console.log(content);

        await authService.signUp(name, surname, email, password);

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to='/login'/>;
    }

    return (
        <div className='App'>
            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Name"
                        required
                        onChange={e => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Surname"
                        required
                        onChange={e => setSurname(e.target.value)}
                    />

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

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                </form>
            </main>
        </div>
    );
}

export default SignUpForm;


//send request in this file
// await axios.post('http://localhost:8080/api/register', user).then(
//     res => {
//         console.log(res);
//     }
// ).catch(
//     err =>
//     {
//         console.log('e')
//     }
// )