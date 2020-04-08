import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import md5 from 'md5'


import './style.css'
import api from '../../services/api'


export default function Details() {

    const history = useHistory()
    const { id } = useParams()

    const [heroe, setHeroe] = useState([])
    const [image, setImage] = useState([])

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

        api.get(`characters/${id}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`).then(res => {
            setHeroe(res.data.data.results[0])
            setImage(res.data.data.results[0].thumbnail)
        })

    }, [1])

    function goBack() {
        history.push('/home')
    }


    return (
        <div className="details-container">

            <img src={`${image.path}.${image.extension}`} />
            <div>
                <h1>{heroe.name}</h1>
                <p>{heroe.description ? heroe.description : 'Não tem descrição'}</p>
                <div onClick={goBack} className="goBack" >
                    <p>Voltar</p>
                    <FiArrowLeft size={16} color="6229fd" />
                </div>
            </div>

        </div>
    )
}