import React from 'react';
//Components
import Header from './components/Header';
import Todo from './components/Todo/Todo'

//Styles
import {GlobalStyle} from './GlobalStyle';
import {TodoStyles} from './components/Todo/TodoStyles';

function App() {
    return (
        <div className="App">
            <Header/>
            <h1>TODOS</h1>
            <Todo text='Learn React' />
            <GlobalStyle/>
        </div>
    );
}

export default App;

// const Start = () => React.createElement('div', null, 'This is a element');
// const App = () => {
//   return Start();
// }
// function App() {
//     return (
//         <div className="App">
//             Start here.
//         </div>
//     );
// }

