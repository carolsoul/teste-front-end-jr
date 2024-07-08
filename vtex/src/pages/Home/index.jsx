import styles from './Home.module.css';
import {BASE_URL_API} from '../../API';
import { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
export const Home =()=> {
    const [data, setData]=useState([]);
    const [error, setError] = useState(null);

    const ListDataProducts = async () => {
        try {
          const res = await fetch(BASE_URL_API);
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          const response = await res.json();
          if (Array.isArray(response.products)) {
            setData(response.products);
          } else {
            throw new Error('Data format is incorrect');
          }
        } catch (error) {
          setError(error.message);
          console.error('Erro ao obter dados:', error);
        }
      };

    useEffect(() => {
        ListDataProducts();
    }, []);

    if (error) {
        return <div>Erro: {error}</div>;
      }

      return (
        <> 
            <div className='styles.container'>
                <div className='styles.box'>
                    {data.map((item, index) => {
                        return(
                            <div key={index} className='styles.card'>
                                <Link className={'styles.items'} to={`/product/${item.id}`}>
                                    <img src={item.photo} alt={item.productName} width={247} height={228} />
                                    <h2>{item.productName}</h2>
                                    <p className='price'>R$ {item.price}</p>
                                    <p>ou 2x de R$ 49,95 sem juros</p>
                                    <p className='frete'>Frete Grátis</p>
                                    <button className='styles.btn_comprar'>COMPRAR</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
      );
    };