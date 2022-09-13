import HeroGames from "./HeroGames";
import HeroImage from "./HeroImage";
import './Hero.css';

export default function Hero({data}) {
    
    return (
        <div className="hero">
            <HeroImage data={data}/>
            <div className="hero_games">
                <HeroGames data={data}/>
            </div>
        </div>
    )
}