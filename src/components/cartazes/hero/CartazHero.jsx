import { useState } from 'react';
import Descrição from '../descrição/Descrição';
import './CartazHero.css';

export default function CartazHero({title, thumb, description, date, dev, genre, platform, link}) {

    const [modal, setModal] = useState(false)

    const changeModal = (state) => state ? setModal(true) : setModal(false);

    return(
        <>
            <div className='cartaz_hero' onClick={() => setModal(true)}>
                <img src={thumb} alt={`${title} Capa `}/>
                <p>{title}</p>
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