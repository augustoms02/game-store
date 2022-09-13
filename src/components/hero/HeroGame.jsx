import { useState, useEffect } from 'react';
import CartazHero from '../cartazes/hero/CartazHero';

export default function HeroGame({data}) {

    const [game, setGame] = useState({});

    useEffect(() => {
        const random = () => Math.floor(Math.random() * 358);
        const randomGame = () => setGame(data[random()] || {});
        randomGame();
    }, [data])

    return (
        <CartazHero
            title={game.title}
            thumb={game.thumbnail}
            description={game.short_description}
            date={game.release_date}
            dev={game.developer}
            genre={game.genre}
            platform={game.platform}
            link={game.game_url}
        />
    )
}