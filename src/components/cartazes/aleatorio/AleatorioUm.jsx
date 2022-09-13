import { useState, useEffect } from 'react';
import Descrição from '../descrição/Descrição';
import './Aleatorio.css';

export default function AleatorioUm({data}) {

    const [game, setGame] = useState({});

    useEffect(() => {
        const random = () => Math.floor(Math.random() * 358);
        const randomGame = () => setGame(data[random()] || {});
        randomGame();
    }, [data])

    const [modal, setModal] = useState(false)
    const changeModal = (state) => state ? setModal(true) : setModal(false);

    return (
        <>
            <div className='container_aleatorio' onClick={() => setModal(true)}>
                <img src={game.thumbnail} alt={`${game.title} Capa`}/>
                <h3>{game.title}</h3>
            </div>
            {modal ? 
            <Descrição
            title={game.title}
            thumb={game.thumbnail}
            description={game.short_description}
            date={game.release_date}
            dev={game.developer}
            genre={game.genre}
            platform={game.platform}
            link={game.game_url}
            state={changeModal}
            /> 
            : null}
        </>
    )
}