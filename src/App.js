import React, { useState } from 'react';
import './index.css';
import MainContent from './components/Main/MainContent';
import Sidebar from './components/Side/Sidebar';
import MainSide from './components/MainSide/MainSide';


const App = () => {
  const [mainMenu, setMainMenu] = useState('translate');

  const handleSidebarButtonClick = (menuItem) => {
    setMainMenu(menuItem);
  };

  return (
    <div className='flex_container'>
      <Sidebar onButtonClick={handleSidebarButtonClick} className='sidebar'/>
      <MainContent selectedMenuItem={mainMenu} className='main_cont' >
      </MainContent>

      
    </div>
  );
};

export default App;