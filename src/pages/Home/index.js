import React, { useState, useEffect } from 'react'
import md5 from 'md5'
import { format } from 'date-fns'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'



import './style.css'
import api from '../../services/api'

export default function Home() {

    const [heroes, setHeroes] = useState([])

    const history = useHistory()

    const publicKey = localStorage.getItem('public_key')
    const privateKey = localStorage.getItem('private_key')

    function createHash(timeStamp) {
        const toBeHashed = timeStamp + privateKey + publicKey;
        const hashedMessage = md5(toBeHashed);
        return hashedMessage;
    }

    const timeStamp = Date.now().toString();
    const hash = createHash(timeStamp);

    useEffect(() => {

        api.get(`characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`).then(res => {
            setHeroes(res.data.data.results)
        })

    }, [1])

    function logout() {
        localStorage.clear()
        history.push('/')
    }

    function details(id) {
        history.push(`/details/${id}`)
    }

    return (
        <div className="profile-container">
            <header>
                <h1>Todos os heroes</h1>
                <div onClick={logout} >
                    <p>Sair</p>
                    <FiArrowLeft size={16} color="6229fd" />
                </div>
            </header>


            <table>
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Última atualização</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        heroes.map(res => (
                            <tr key={res.id}>
                                <td>{res.name}</td>
                                <td>{res.description ? res.description : 'Não tem descrição'}</td>
                                <td>{format(new Date(res.modified), 'dd/MM/yyyy hh:mm')}</td>
                                <td><button className="button" onClick={() => details(res.id)}>Saiba mais</button></td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}