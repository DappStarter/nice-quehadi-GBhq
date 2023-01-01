require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun foot blanket razor pave clutch hard light army gauge'; 
let testAccounts = [
"0xa6f456e5ec55986b9deffc896e61299f849dff6770d111bb2568e8002b8832b3",
"0xd0cf843798d782a9277715d31f747d507bd39aeff5fedef97f394c3d802b250e",
"0x426c3a2d2012370577ec3de88212b8dbe4118c6c9c9ca893afe7b71e5b07f615",
"0x98abc10337fd566309d2d3183f043eeb88e5f2b9e343edc9fef682fba039c209",
"0x3af88b98361f656356af1b71e63a56dbded6d5b0ce6f87bb112ee5b2d20d3969",
"0x29391f6d838dff042aa4ab6fc53361d06b409de6dbc0f90d8a8e350af299c901",
"0xb0c5c7b2afb9f1ff8c2c4bad5d99551f25fc98b55ce4cad5c9af0b02eadc1a72",
"0x046041e573cb245afd4066999c82604700fbe34d4a6fb81cc8198ac5bec87795",
"0x8e4a6c9542f8b9cf71871ef32afc21a0b6464cca14a50fe10e5de5e011319428",
"0x0b768ca4d6e3a38b16c3ce0d8c8c3ba41f82a62af5ea92a8d9c4473e9a552c43"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


