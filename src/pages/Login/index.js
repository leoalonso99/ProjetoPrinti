import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './style.css'


export default function Login() {

    const [public_key, setPublic_key] = useState('')
    const [private_key, setPrivate_key] = useState('')

    const history = useHistory()

    function handleLogin(e) {
        e.preventDefault()

        try {
            localStorage.setItem('public_key', public_key)
            localStorage.setItem('private_key', private_key)
            history.push('/home')
        } catch (err) {
            alert('Falha no login, tente novamente')
        }
    }

    return (
        <div className="logon-container">

            <section className="form">

                <form onSubmit={handleLogin}>

                    <h1>Dados de acesso</h1>

                    <input
                        placeholder="public_key"
                        value={public_key}
                        onChange={e => setPublic_key(e.target.value)}
                    />
                    <input
                        placeholder="private_key"
                        value={private_key}
                        onChange={e => setPrivate_key(e.target.value)}
                    />

                    <button className="button">Acessar</button>

                </form>

            </section>

        </div>
    )
}