import React, {Component} from 'react';
import {FaHome} from 'react-icons/fa';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';

// function App() {
//   return (
//       <h1>Hello from Tech Store</h1>
//   );
// }

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello Sourav<FaHome/></h1>
                <h1>hello from tech store</h1>
                <Button large>OK DONE</Button>
            </div>
        );
    }

}

const color ='pink';
const Button = styled.button`
color: #5fb7ea;
//background-color: green;
background-color:${color};
font-size: ${props=>(props.large? '3rem':'1rem')};
`;

export default App;
