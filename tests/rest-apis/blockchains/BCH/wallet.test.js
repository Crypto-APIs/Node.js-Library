async function Wallet(caClient) {
    console.log('\n::BCH Wallet');

    const randomWalletName = Math.random().toString(36).substring(7);
    const randomHDWalletName = randomWalletName + 'Hd';
    const hdWalletPass = 'testhdpass';
    const xPubPass = 'testxpubpass';

    const newAddress = await caClient.blockchain.BCH.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario
    const newOtherAddress = await caClient.blockchain.BCH.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario

    const wallet = await caClient.blockchain.BCH.wallet.createWallet(randomWalletName, [newAddress]).then(response => response.payload);
    const hdWallet = await caClient.blockchain.BCH.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass).then(response => response.payload);

    await caClient.blockchain.BCH.wallet.listWallets();
    await caClient.blockchain.BCH.wallet.listHDWallets();
    await caClient.blockchain.BCH.wallet.getWallet(wallet.walletName);
    await caClient.blockchain.BCH.wallet.getHDWallet(hdWallet.walletName);
    await caClient.blockchain.BCH.wallet.addAddressToWallet(wallet.walletName, [newOtherAddress]);

    const generatedAddress = await caClient.blockchain.BCH.wallet.generateAddressInWallet(wallet.walletName).then(response => response.payload.address_info.address);
    await caClient.blockchain.BCH.wallet.generateAddressInHDWallet(hdWallet.walletName, 1, hdWalletPass);

    await caClient.blockchain.BCH.wallet.removeAddressFromWallet(wallet.walletName, generatedAddress);
    await caClient.blockchain.BCH.wallet.deleteWallet(wallet.walletName);
    await caClient.blockchain.BCH.wallet.deleteHDWallet(hdWallet.walletName);

    const xpub = await caClient.blockchain.BCH.wallet.createXPub(xPubPass).then(response => response.payload.xpub);

    await caClient.blockchain.BCH.wallet.getXPubChangeAddresses(xpub, 0, 1);
    await caClient.blockchain.BCH.wallet.getXPubReceiveAddresses(xpub, 0, 1);
}

module.exports = Wallet;
