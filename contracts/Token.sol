pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint256 private _totalSupply;
    uint8 private _decimals;

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)

        _decimals = 18;
        _totalSupply = 100000000000000000000000000;
        _mint(msg.sender, _totalSupply);
    }
}
