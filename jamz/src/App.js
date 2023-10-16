import './App.css';
import MintMusicNFT from './modules/MintMusicNFT';

function App() {
  return (
    <div className="App">
      <h1>Jamz Music NFT Creator</h1>
      
      <div id="creation-tools">
        <h2>Drum Machine and Sequencer</h2>
        <h2>Keyboard</h2>
      </div>
      
      <MintMusicNFT />
    </div>
  );
}

export default App;
