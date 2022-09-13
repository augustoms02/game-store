import { useState } from "react";
import './Busca.css'

export default function Busca({data}) {

    const [search, setSearch] = useState('');
    const lowerSearch = search.toLowerCase();

    const titlesMap = data.map((games) => games.title);
    const titles = titlesMap || [];
    const titlesFilter = titles.filter((title) => title?.toLowerCase().includes(lowerSearch))

    return(
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input name="search" value={search} type="text" autoComplete="off" className="search_bar" onChange={(e) => setSearch(e.target.value)}/>
            </form>
            {search === '' ? null : 
            <ul className="search_results">
                {titlesFilter.map((title) => {
                    return data.map((game) => game.title === title ? 
                        <li key={game.id}>
                            <a href={game.game_url} target="_blank" rel="noreferrer">
                                <div className="search_container">
                                    <img src={game.thumbnail} alt={`${title} Capa`} />
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{game.short_description}</p>
                                    </div>
                                </div>
                            </a>
                        </li> : null)})
                    }
                </ul>
            }        
        </>
    )
}