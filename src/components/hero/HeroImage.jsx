import { useState, useEffect } from "react";
import Descrição from "../cartazes/descrição/Descrição";
import './HeroImage.css';

export default function HeroImage({data}) {

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
            <img src={game.thumbnail} alt={`${game.title} Capa`} className="hero_img" onClick={() => setModal(true)}/>
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