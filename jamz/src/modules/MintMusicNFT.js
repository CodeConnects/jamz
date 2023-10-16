// MintMusicNFT.js
import React, { useState } from 'react';
import Web3 from 'web3';
import '../styles/MintMusicNFT.css';

const MintMusicNFT = () => {
  const [blockchainChoice, setBlockchainChoice] = useState('polygon');
  const [musicFile, setMusicFile] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const mintNFT = async () => {
    setIsButtonClicked(true);

    // Get the user's wallet address
    const walletAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
    // Create a new NFT contract instance
    const web3 = new Web3(window.ethereum);

    // get the ID of the current blockchain
    const chainId = await web3.eth.getChainId();

    // get the current network gas price
    const gasPrice = await web3.eth.getGasPrice();

    // Get the current block number
    const blockNumber = await web3.eth.getBlockNumber();

    alert(
      'Current chain ID: ' + chainId + '\n' +
      'Current gas price: ' + gasPrice + '\n' +
      'Current block number: ' + blockNumber + '\n' +
      'Current user wallet address: ' + walletAddress
    );

    /*console.log(`Current chain ID: ${chainId}`);
    console.log(`Current gas price: ${gasPrice}`);
    console.log(`Current block number: ${blockNumber}`);
    console.log(`Current user wallet address: ${walletAddress}`);*/

    // Mint the NFT
    // const nftContract = new web3.eth.Contract(nftContractAbi, nftContractAddress);
    // const nftContractAddress = process.env.REACT_APP_NFT_CONTRACT_ADDRESS;
    // await nftContract.methods.mintNFT(walletAddress, musicFile).send();
  };

  return (
    <div>
      <h2 className='mb-6 bg-cyan-600 text-white p-3'>Music NFT Mint</h2>

      <div className='mb-6'>
        <input 
          type="file" 
          onChange={(e) => setMusicFile(e.target.files[0])}
          className='bg-white py-2 rounded'
        />
      </div>

      <div className='mb-12'>
        <select 
          value={blockchainChoice} 
          onChange={(e) => setBlockchainChoice(e.target.value)} 
          className='p-2.5 border border-cyan-700'
        >
          <option value="polygon">Polygon</option>
          <option value="scroll">Scroll</option>
          <option value="mantle">Mantle</option>
          <option value="filecoin">Filecoin</option>
        </select>
      </div>
  
      <button 
        onClick={mintNFT} 
        className='bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded'
        >Mint Music NFT</button>
    </div>
  );
};

export default MintMusicNFT;
