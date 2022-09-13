import './WrapperAle.css';

export default function WrapperAle({children}) {
    return (
        <section className='wrapper_container'>
            <div className='wrapper_top'>
                <div className='wrapper_gratuitos'>
                    <img src="../images/Frame.png" alt="" />
                    <h5>Gratuitos</h5>
                </div>
                <h3 className='jogos_aleatorios'>Jogos Aleatórios</h3>
            </div>
            <div className='container_jogos_aleatorios '>
                {children}
            </div>
        </section>
    )
}