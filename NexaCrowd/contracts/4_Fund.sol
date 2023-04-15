// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@aave/protocol-v2/contracts/interfaces/ILendingPool.sol";
import "@aave/protocol-v2/contracts/interfaces/ILendingPoolAddressesProvider.sol";
import "@textile/threads-client";
import "@graphprotocol/graph-node-ethereum/contracts/ServiceRegistry.sol";

contract ProjectFunding is Ownable {
    // Declare variables
    IERC20 private _token;
    ILendingPool private _lendingPool;
    ILendingPoolAddressesProvider private _lendingPoolAddressProvider;
    ThreadsClient private _threadsClient;
    ServiceRegistry private _serviceRegistry;
    
    // Declare events
    event FundingReceived(address indexed sender, uint256 amount);
    event BorrowingCompleted(address indexed sender, uint256 amount);
    event FileStored(address indexed sender, string hash);
    
    constructor(address tokenAddress, address lendingPoolAddressProviderAddress, address threadsClientAddress, address serviceRegistryAddress) {
        // Initialize variables
        _token = IERC20(tokenAddress);
        _lendingPoolAddressProvider = ILendingPoolAddressesProvider(lendingPoolAddressProviderAddress);
        _lendingPool = ILendingPool(_lendingPoolAddressProvider.getLendingPool());
        _threadsClient = ThreadsClient(threadsClientAddress);
        _serviceRegistry = ServiceRegistry(serviceRegistryAddress);
    }
    
    // Allow supporters to contribute to the project
    function contribute(uint256 amount) public {
        require(amount > 0, "Amount must be greater than 0");
        require(_token.balanceOf(msg.sender) >= amount, "Not enough balance");
        require(_token.allowance(msg.sender, address(this)) >= amount, "Not enough allowance");
        require(_token.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        emit FundingReceived(msg.sender, amount);
    }
    
    // Allow borrowing from the AAVE protocol
    function borrow(uint256 amount) public onlyOwner {
        require(amount > 0, "Amount must be greater than 0");
        require(_token.balanceOf(address(this)) >= amount, "Not enough balance");
        _token.approve(address(_lendingPool), amount);
        _lendingPool.borrow(address(_token), amount, 2, 0, address(this));
        emit BorrowingCompleted(msg.sender, amount);
    }
    
    // Allow storing project files and metadata using Filecoin and Lens Protocol
    function storeFile(string calldata hash) public {
        _threadsClient.create("project-files", "1", (hash));
        _serviceRegistry.createServiceRegistration("file-storage", "file-storage", "https://api.file.storage");
        emit FileStored(msg.sender, hash);
    }

}
