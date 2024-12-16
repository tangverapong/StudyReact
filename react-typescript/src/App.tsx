
import { useState } from 'react';
import './App.scss';
import TableArea from './component/TableArea/TableArea';
import Head from './component/Head/Head';
import SideBar from './component/SideBar/SideBar';
import FirstRowContain from './component/FirstRowContain/FirstRowContain';
import BoxMedium from './component/BoxMedium/BoxMedium';
import MainTable from './component/MainTable/MainTable';
import FinalRowContain from './component/FinalRowContain/FinalRowContain';
import { ThemeContext, MyCouter } from './Contexts.js';

function App() {
  const theme = 'dark';
  const [counter, setCounter] = useState(10);

  function changeContext() {
    setCounter(prevCounter => prevCounter + 1);
    console.log('newCounter', counter);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <MyCouter.Provider value={counter}>
        <div className="flex-container">
          <Head />
          <div className="main-content">
            <SideBar/>
            <div className="content">
              <div className="containerin"> 
                <FirstRowContain/>
                <BoxMedium/>
                <MainTable/>
                    


                
                
                
                


                <FinalRowContain/> 

                
              </div>        
            </div>
          </div>
        </div>
        
      </MyCouter.Provider>
    </ThemeContext.Provider>
    
  );
}

export default App;
