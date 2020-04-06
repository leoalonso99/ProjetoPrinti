import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Title } from './styles';
import './index.css'

class App extends React.Component {
    render() {
        return (
            
            <div>
                <main className="login-grid">

                    <Title>Dados de acesso</Title>

                    <input className="login-inp" type="text" placeholder="private_key"></input>
                    <input className="login-inp" type="text" placeholder="public_key"></input>

                    <Button>Acessar</Button>
                </main>

            </div>
        )
    }
}



const container = document.getElementById("root");
container ? ReactDOM.render(<App />, container) : false;