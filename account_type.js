import { ethers } from 'ethers';

const nodeProvider = "";

const getAccountType = (code) => {
    const provider = ethers.getDefaultProvider(nodeProvider);
    const code = provider.getCode(code);
    return code;
}

// get the account type using the account type function
// getAccountType()