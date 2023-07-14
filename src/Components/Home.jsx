import React, {useEffect, useState} from 'react';
import {getAllMagicCard} from '../Requests/Scripts'


const Home = () => {

    const [allCards, setAllCards] = useState([])

    useEffect(async () => {

        const cards = await getAllMagicCard()

        setAllCards(cards?.data?.cards)

    }, [])

    // const icons = allCards.map(element => element.imageUrl)

    return (
        <div style={{
            width: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h2>Tienda de cartas Magic</h2>

            <div>

                {allCards &&
                    allCards.map(element =>
                        element.imageUrl &&
                        <a href={'/carta/' + element.multiverseid} key={element.multiverseid}>
                        <img src={element.imageUrl} height={400} width={250} alt={'img'} style={{margin:10}}  />
                        </a>
                    )
                }

            </div>
        </div>)
}

export default Home