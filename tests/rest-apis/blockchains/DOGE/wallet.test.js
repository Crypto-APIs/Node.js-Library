async function Wallet(caClient) {
    console.log('\n::DOGE Wallet');

    const randomWalletName = Math.random().toString(36).substring(7);
    const randomHDWalletName = randomWalletName + 'Hd';
    const hdWalletPass = 'testhdpass';
    const xPubPass = 'testxpubpass';

    const newAddress = await caClient.blockchain.DOGE.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario
    const newOtherAddress = await caClient.blockchain.DOGE.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario

    const wallet = await caClient.blockchain.DOGE.wallet.createWallet(randomWalletName, [newAddress]).then(response => response.payload);
    const hdWallet = await caClient.blockchain.DOGE.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass).then(response => response.payload);

    await caClient.blockchain.DOGE.wallet.listWallets();
    await caClient.blockchain.DOGE.wallet.listHDWallets();
    await caClient.blockchain.DOGE.wallet.getWallet(wallet.walletName);
    await caClient.blockchain.DOGE.wallet.getHDWallet(hdWallet.walletName);
    await caClient.blockchain.DOGE.wallet.addAddressToWallet(wallet.walletName, [newOtherAddress]);

    const generatedAddress = await caClient.blockchain.DOGE.wallet.generateAddressInWallet(wallet.walletName).then(response => response.payload.address_info.address);
    await caClient.blockchain.DOGE.wallet.generateAddressInHDWallet(hdWallet.walletName, 1, hdWalletPass);

    await caClient.blockchain.DOGE.wallet.removeAddressFromWallet(wallet.walletName, generatedAddress);
    await caClient.blockchain.DOGE.wallet.deleteWallet(wallet.walletName);
    await caClient.blockchain.DOGE.wallet.deleteHDWallet(hdWallet.walletName);

    const xpub = await caClient.blockchain.DOGE.wallet.createXPub(xPubPass).then(response => response.payload.xpub);

    await caClient.blockchain.DOGE.wallet.getXPubChangeAddresses(xpub, 0, 1);
    await caClient.blockchain.DOGE.wallet.getXPubReceiveAddresses(xpub, 0, 1);
}

module.exports = Wallet;
