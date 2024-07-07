import styles from './PopUp.module.css';
import {BASE_URL_API} from '../../API';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
export const PopUp = () => {
    const [itemId, setItemId]= useState([]);
    const {id} = useParams();
    const getItemId = async () => {
        const res = await fetch(`${BASE_URL_API}/PopUp/${id}`)
        const response = await res.json();
        setItemId(response);
        //https://cors-anywhere.herokuapp.com/https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
    }
    useEffect(() => {
        getItemId();
    })    
    return(
        <>
            <h3>listar itens</h3>
            <div>
                <img src={itemId.photo} alt='' />
                <h2>{itemId.productName}</h2>
            </div>
        </>
    )
}