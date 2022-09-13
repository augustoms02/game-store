import './Vertical.css';
import CartazVertical from '../cartazes/vertical/CartazVertical';

export default function Vertical({data, genre}) {

    const categoria = data.filter((game) => game.genre === genre);
    const map = categoria.map((game) => 
        <li key={game.id}>
            <CartazVertical
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
    return (
        <div className='vertical_container'>
            <h3>{genre}</h3>
            <ul>
                {map}
            </ul>
        </div>
    )
}