import React from 'react';
import './App.css';

//Logo, Navs e navbar
import Comecar from './Pag/main';
//Carousel
import Carrou from './Pag/carrossel_pag/slideMain';
//acordation
import BasicExample from './Pag/Acordations/Accordat';

function App() {
    return (
        <>
            <Comecar />
            <Carrou />
            <BasicExample />
        </>
    );
}

export default App;
