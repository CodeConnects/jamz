// MintMusicNFT.js
import React, { useState } from 'react';
import Web3 from 'web3';

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
    //const nftContract = new web3.eth.Contract(nftContractAbi, nftContractAddress);
    // const nftContractAddress = process.env.REACT_APP_NFT_CONTRACT_ADDRESS;

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
    //await nftContract.methods.mintNFT(walletAddress, musicFile).send();
  };

  return (
    <div>
      <h1>Music NFT Mint</h1>
      <div>
        <select value={blockchainChoice} onChange={(e) => setBlockchainChoice(e.target.value)}>
          <option value="polygon">Polygon</option>
          <option value="scroll">Scroll</option>
          <option value="mantle">Mantle</option>
          <option value="filecoin">Filecoin</option>
        </select>
      </div>
      <div>
        <input type="file" onChange={(e) => setMusicFile(e.target.files[0])} />
      </div>
      <button onClick={mintNFT}>Mint NFT</button>
    </div>
  );
};

export default MintMusicNFT;
