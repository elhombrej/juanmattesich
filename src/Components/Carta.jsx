import React, {useEffect, useState} from 'react';
import {getAllMagicCard} from '../Requests/Scripts';
import {useLocation} from 'react-router-dom';
import {Button} from "antd";

const Carta = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/').pop(); // Obtener el valor del pathname del URL

    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const cards = await getAllMagicCard();
            const foundCard = cards?.data?.cards?.find((card) => card.multiverseid === pathname);
            setCard(foundCard);
        };

        fetchData();
    }, [pathname]);

    return (
        <div style={{
            width: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h2>Carta</h2>

            <Button href={'/home'}>
                Atras
            </Button>
            <div
                style={{
                    width: '100vw',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <h2>{card?.name}</h2>
                <img src={card?.imageUrl} height={400} width={250} alt={'img'} style={{margin: 10}}/>
                <h5>{card?.text}</h5>
                <ul>
                    <li>Costo: {card?.manaCost}</li>
                    <li>Rareza: {card?.rarity}</li>
                    <li>Poder: {card?.power}</li>
                    <li>Tipo: {card?.type}</li>
                    <li>Artista: {card?.artist}</li>
                </ul>
            </div>
        </div>
    );
};

export default Carta;
