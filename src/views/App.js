import React from 'react';
import './App.css';

//Logo, Navs e navbar
import Comecar from './Pag/main';
//Carousel
import Carrou from './Pag/carrossel_pag/slideMain';
//acordation
import BasicExample from './Pag/Acordations/Accordat';
//buttons
import OutlineTypesExample from './Pag/buttons/showm';

function App() {
  return (
    <>
      <Comecar />
      <Carrou />
      <div>
        <h2>Welcome to the main page</h2>
        <p>
          <h4>You can write everything here</h4>
        </p>
      </div>
      <BasicExample />
      <div className='af'>
        <h3>JBSOFTSOL FOR ALL SOLUTIONS <OutlineTypesExample /></h3>
      </div>
      <div className='aj'>
      </div>
      <div className='ag'>
        <a className='ptu'>Categories: </a ><a className='pts' href='#'> Main </a> <a className='pts' href='#'>| Contacts </a> <a className='pts' href='#'>| Others </a>
      </div>
    </>
  );
}

export default App;
