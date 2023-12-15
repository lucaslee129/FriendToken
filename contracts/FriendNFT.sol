// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract FriendNFT is ERC721URIStorage {
    uint256 tokenId;

    struct tokenMetaData {
        uint256 tokenId;
        uint256 timeStamp;
        string tokenURI;
    }

    mapping(address => tokenMetaData[]) public ownershipRecord;

    constructor() ERC721("EternalNFT", "ENFT") {}


    function mintToken(address receipient, string memory url) public {
        _safeMint(receipient, tokenId);
        ownershipRecord[receipient].push(tokenMetaData(tokenId, block.timestamp, url));
        tokenId = tokenId + 1;
    }
}
