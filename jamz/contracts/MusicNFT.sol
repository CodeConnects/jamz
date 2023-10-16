// SPDX-License-Identifier: GNU GPLv3
pragma solidity ^0.8.0;

contract MusicNFT {
    mapping(address => uint256) public nftBalances;
    mapping(uint256 => string) private musicFiles; // Mapping to store IPFS hashes

    uint256 public nextTokenId = 1; // Used for generating unique token IDs

    function mintNFT(address to, string calldata ipfsHash) external {
        // Mint the NFT to the user's wallet address
        nftBalances[to] += 1;

        // Save the IPFS hash of the music file to the blockchain
        musicFiles[nextTokenId] = ipfsHash;
        nextTokenId += 1;
    }

    function getMusicFile(uint256 tokenId) external view returns (string memory) {
        return musicFiles[tokenId];
    }
}
