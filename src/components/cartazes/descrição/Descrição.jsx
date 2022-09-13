import './Descrição.css'

export default function Descrição({title, thumb, description, date, dev, genre, platform, link, state}) {

    return(
        <>
            <div className='backdrop' onClick={() => state(false)}>
            </div>
            <div className="info_box">
                <img src={thumb} alt={`${title} Thumbnail`} className="game_thumbnail"/>
                <div>
                    <h2>{title}</h2>
                    <h4>Desenvolvedor: <span>{dev}</span></h4>
                    <h4>Gênero: <span>{genre}</span></h4>
                    <h4>Plataforma: <span>{platform}</span></h4>
                    <h4>Lançamento: <span>{date}</span></h4>  
                    <h4>Descrição: <span>{description}</span></h4>
                    <a href={link} target="_blank" rel="noreferrer">Encontrar Jogo</a>
                </div>
            </div>
        </>
    )
}