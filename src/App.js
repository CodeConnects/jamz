import React from 'react';
import './App.css';
import MintMusicNFT from './modules/MintMusicNFT';

function App() {
  return (
    <div className="main-app text-center">
      <h1 className='bg-cyan-900'>Jamz Music NFT Creator</h1>
      
      <div className='flex justify-around my-10'>
        <h2 className='flex'>Drum Machine <br />------------------<br />Sequencer</h2>
        <h2 className='flex'>Keyboard <br />------------------<br />Recorder</h2>
      </div>
      
      <MintMusicNFT />
    </div>
  );
}

export default App;
