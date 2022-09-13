import { useState } from 'react';
import './CartazVertical.css';
import Descrição from '../descrição/Descrição';

export default function CartazVertical({title, thumb, description, date, dev, genre, platform, link}) {

    const [modal, setModal] = useState(false)

    const changeModal = (state) => state ? setModal(true) : setModal(false);

    return(
        <>
            <div className='cartaz_vertical' onClick={() => setModal(true)}>
                <img src={thumb} alt={`${title} Capa `}/>
                <div className='cartaz_texto'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <h5>Gratuito</h5>
                </div>
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