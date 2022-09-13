import { useState } from 'react'
import './Cartaz.css'
import Descrição from '../descrição/Descrição';

export default function Cartaz({title, thumb, description, date, dev, genre, platform, link}) {

    const [modal, setModal] = useState(false)

    const changeModal = (state) => state ? setModal(true) : setModal(false);

    return(
        <>
            <div className='cartaz' onClick={() => setModal(true)}>
                <img src={thumb} alt={`Capa ${title}`}/>
                <h5>{title}</h5>
                <p>Gratuito</p>
            </div>
            {modal ? 
            <Descrição
            title={title}
            thumb={thumb}
            description={description}
            date={date}
            dev={dev}
            genre={genre}
            platform={platform}
            link={link}
            state={changeModal}
            /> 
            : null}
        </>
    )
}