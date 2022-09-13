import NavBar from "../navbar/NavBar";
import Horizontal from '../fileiras/Horizontal';
import Vertical from "../fileiras/Vertical";
import WrapperAle from "../cartazes/aleatorio/WrapperAle";
import AleatorioUm from "../cartazes/aleatorio/AleatorioUm";
import AleatorioDois from "../cartazes/aleatorio/AleatorioDois";
import Hero from "../hero/Hero";
import './Home.css';
import Footer from "../footer/Footer";

export default function Home ({data}) {
    return (
        <>
            <main>
                <header>
                    <NavBar data={data}/>
                    <Hero data={data}/>
                </header>
                <Horizontal data={data} genre='Shooter'/>
                <WrapperAle>
                    <AleatorioUm data={data}/>
                    <AleatorioDois data={data} />
                </WrapperAle>
                <Horizontal data={data} genre='MOBA'/>
                <section className="vertical_games">
                    <Vertical data={data} genre='Social'/>
                    <Vertical data={data} genre='Battle Royale'/>
                    <Vertical data={data} genre='Racing'/>
                </section>
                <Horizontal data={data} genre='Card Game'/>
                <Horizontal data={data} genre='MMORPG'/>
                <WrapperAle>
                    <AleatorioUm data={data}/>
                    <AleatorioDois data={data} />
                </WrapperAle>
                <Horizontal data={data} genre='Strategy'/>
                <Horizontal data={data} genre='Fighting'/>
                <Horizontal data={data} genre='Sports'/>
            </main>
            <Footer/>
        </>
    )
}