// MintMusicNFT.js
import React, { useState } from 'react';
//import { Web3 } from 'web3';
import '../styles/MintMusicNFT.css';

const MintMusicNFT = () => {
  const [blockchainChoice, setBlockchainChoice] = useState('polygon');
  const [musicFile, setMusicFile] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const mintNFT = async () => {
    setIsButtonClicked(true);
    console.log(musicFile);
    
    try { 

      // Get the user's wallet address
      const walletAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
    
      // Create a new NFT contract instance
      //const web3 = new Web3(window.ethereum);

      // get the ID of the current blockchain
      //const chainId = await web3.eth.getChainId();

      // get the current network gas price
      //const gasPrice = await web3.eth.getGasPrice();

      // Get the current block number
      //const blockNumber = await web3.eth.getBlockNumber();

      //console.log('Current chain ID: ' + musicFile + '\n' + isButtonClicked + '\n' + blockchainChoice);

      alert(
        //'Current chain ID: ' + chainId + '\n' +
        //'Current gas price: ' + gasPrice + '\n' +
        //'Current block number: ' + blockNumber + '\n' +
        'Current user wallet address: ' + walletAddress
      );
    } catch (error) { 
      alert('No Wallet Connected: \n' + error);
      setIsButtonClicked(false);
    }

    //console.log(`Current chain ID: ${chainId}`);
    //console.log(`Current gas price: ${gasPrice}`);
    //console.log(`Current block number: ${blockNumber}`);
    //console.log(`Current user wallet address: ${walletAddress}`);

    // Mint the NFT
    // const nftContract = new web3.eth.Contract(nftContractAbi, nftContractAddress);
    // const nftContractAddress = process.env.REACT_APP_NFT_CONTRACT_ADDRESS;
    // await nftContract.methods.mintNFT(walletAddress, musicFile).send();

    alert('Mint Music NFT');
  };

  return (
    <div>
      <h2 className='mb-12 bg-cyan-600 text-white p-3'>Music NFT Mint</h2>

      <div className='mb-6'>
        <input 
          type="file" 
          onChange={(e) => setMusicFile(e.target.files[0])}
          className='bg-white p-2 rounded-sm border border-cyan-700'
        />
      </div>

      <div className='mb-12'>
        <select 
          value={blockchainChoice} 
          onChange={(e) => setBlockchainChoice(e.target.value)}
          className='p-3 border border-cyan-700'
        >
          <option value="polygon">Polygon</option>
          <option value="scroll">Scroll</option>
          <option value="mantle">Mantle</option>
          <option value="filecoin">Filecoin</option>
        </select>
      </div>
  
      <div>
        <button  
          className='relative inline-block group mb-4'
          onClick={mintNFT}
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-semibold leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 rounded-sm group-hover:text-gray-200">
          <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-sm bg-cyan-700"></span>
          <span className="absolute left-0 w-56 h-52 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-cyan-800 group-hover:-rotate-180 ease"></span>
          <span className="relative">Mint Music NFT</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-cyan-800 rounded-sm group-hover:mb-0 group-hover:mr-0"></span>
        </button>
      </div>

    </div>
  );
};

export default MintMusicNFT;
