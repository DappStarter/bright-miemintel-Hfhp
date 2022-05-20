require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift repeat pitch pumpkin harvest inhale bone sunny'; 
let testAccounts = [
"0xa804d62d1b5a2fa294ad60b2e2fa7e36271a3fbfdeab8f04267e7fed243cadb6",
"0xa5f5ddb302756acd9f4eadadc026e96c44e6d088e3604e150826b8bcd51ea481",
"0x0a87efef20fde0a7dd1148f195d0285c14f33dfeca78dfd10df928996b370d12",
"0xfda22e63955986601ebacfa055c18ac195d3932ccac784222b2688463fbadecb",
"0xa19e75ab6f85caeebcbf06f58d929fcc3d0708ed057d88553bed9ca5ebf4f4c0",
"0x41a91318818a8e0183bdd758d4b505a422579d9acdc6babb899a4a2005e73976",
"0x575d33966c4d1f97bd0279e05d8bbae4b9e0190acf1b60feda4f9a5d9137714c",
"0x8f031c7ee0ccc230e26ce71081eee6febd9c12ff2067c8f7f958a193294dad19",
"0xc0665004a51599c465e806ef8b4e8788979f11bb203552a366623d04ee04a18a",
"0x13989627e8fb5b7695e41a7427e285756fea94183b53dd4ccab9a4ab9d79ebac"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

