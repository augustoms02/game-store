import NavBar from '../navbar/NavBar';
import Cartaz from '../cartazes/horizontal/Cartaz'
import './Generos_Platform.css'
export default function Generos({data, genre}) {

    const categoria = data.filter((game) => game.genre === genre);
    const map = categoria.map((game) => 
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

    return (
            <div className='webpage'>
                <NavBar data={data}/>
                <h1 className='title'>{genre}</h1>
                <ul className='games_list'>
                    {map}
                </ul>
            </div>
    )
}