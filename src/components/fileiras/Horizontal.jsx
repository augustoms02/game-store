import { useRef } from 'react';
import {Link} from 'react-router-dom';
import Cartaz from '../cartazes/horizontal/Cartaz';
import './Horizontal.css';

export default function Horizontal({genre, data}) {

    const categoria = data.filter((game) => game.genre === genre);
    const fileira = categoria.slice(0, 17);
    const map = fileira.map((game) => 
        <li key={game.id}>
            <Cartaz
            title={game.title}
            thumb={game.thumbnail}
            description={game.short_description}
            date={game.release_date}
            dev={game.developer}
            genre={game.genre}
            platform={game.platform}
            link={game.game_url}
            />
        </li>)

    const carrossel = useRef(null);
    const moveRight = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }
    const moveLeft = (e) => {
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }
    
    return (
        <section className='carrossel_container'>
            <div className='carrossel_upper'>
                <Link to={`/${genre}`} className='link_title'><h4>{genre}</h4></Link>
                <div className='buttons'>
                    <button onClick={moveLeft}>&lt;</button>
                    <button onClick={moveRight}>&gt;</button>
                </div>
            </div>
            <ul className='carrossel' ref={carrossel}>
                {map}
            </ul>
        </section>
    )
}