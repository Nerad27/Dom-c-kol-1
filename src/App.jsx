import './App.css';
import React from 'react';
import Box from './components/Box';
import Card from './components/Card'



function App() {
  return (
        <>
      <div className='Box' style={{"display":'flex', "justify-content": 'space-between',"textAlign": 'center', "padding": '30px', "margin":'30px'
           }}>
          <div style={{"display": 'block', "border-style": 'solid'}}>
            <Box text="Počet dnů" value={45}/><br/>
          </div>
          <div style={{"display": 'block', "border-style": 'solid'}}>
          <Box text="Počet ůčastníků" value={15}/> <br/>
          </div>
          <div style={{"display": 'block', "border-style": 'solid'}}>
          <Box text="Počet lektorů" value={25}/> <br/>
          </div>
          <div style={{"display": 'block', "border-style": 'solid'}}>
          <Box text="Hodnocení" value={'95%'}/> <br/>
          </div>
        
      </div>
        <div className='Card'>
          <Card title="Dnešní lektor"
              image="/images.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              header="Lektor Jakub"
              button="Tlačítko"
          />
        </div>
    </>
  );
}

export default App;
