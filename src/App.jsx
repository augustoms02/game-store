import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Generos from './components/pages/Generos';
import Platform from './components/pages/Platform';
import Home from './components/pages/Home';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const [data, setData] = useState([{}]);

    useEffect(() => {

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '29fac684bcmsh721c370258c80dfp1d4f4bjsn7082499ae79f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
        };
        
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
        .then(response => response.json())
        .then(response => setData(response))
    }, [])
  
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home data={data}/>}/>
        <Route path='MMORPG' element={<Generos data={data} genre='MMORPG'/>}/>
        <Route path='Shooter' element={<Generos data={data} genre='Shooter'/>}/>
        <Route path='Strategy' element={<Generos data={data} genre='Strategy'/>}/>
        <Route path='Fighting' element={<Generos data={data} genre='Fighting'/>}/>
        <Route path='Card%20Game' element={<Generos data={data} genre='Card Game'/>}/>
        <Route path='Sports' element={<Generos data={data} genre='Sports'/>}/>
        <Route path='MOBA' element={<Generos data={data} genre='MOBA'/>}/>
        <Route path='PC%20(Windows)' element={<Platform data={data} platform='PC (Windows)'/>} />
        <Route path='Web%20Browser' element={<Platform data={data} platform='Web Browser'/>}/>
        <Route path='All' element={<Platform data={data} platform='All'/>}/>
        <Route path='*'/>
      </Routes>
    </>
  );
}

export default App;
