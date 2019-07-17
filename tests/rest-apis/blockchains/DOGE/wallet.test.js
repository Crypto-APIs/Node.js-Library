async function Wallet(caClient) {
    console.log('\n::DOGE Wallet');

    const randomWalletName = Math.random().toString(36).substring(7);
    const randomHDWalletName = randomWalletName + 'Hd';
    const hdWalletPass = 'testhdpass';
    const xPubPass = 'testxpubpass';

    const newAddress = await caClient.BC.DOGE.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario
    const newOtherAddress = await caClient.BC.DOGE.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario

    const wallet = await caClient.BC.DOGE.wallet.createWallet(randomWalletName, [newAddress]).then(response => response.payload);
    const hdWallet = await caClient.BC.DOGE.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass).then(response => response.payload);

    await caClient.BC.DOGE.wallet.listWallets();
    await caClient.BC.DOGE.wallet.listHDWallets();
    await caClient.BC.DOGE.wallet.getWallet(wallet.walletName);
    await caClient.BC.DOGE.wallet.getHDWallet(hdWallet.walletName);
    await caClient.BC.DOGE.wallet.addAddressToWallet(wallet.walletName, [newOtherAddress]);

    const generatedAddress = await caClient.BC.DOGE.wallet.generateAddressInWallet(wallet.walletName).then(response => response.payload.address_info.address);
    await caClient.BC.DOGE.wallet.generateAddressInHDWallet(hdWallet.walletName, 1, hdWalletPass);

    await caClient.BC.DOGE.wallet.removeAddressFromWallet(wallet.walletName, generatedAddress);
    await caClient.BC.DOGE.wallet.deleteWallet(wallet.walletName);
    await caClient.BC.DOGE.wallet.deleteHDWallet(hdWallet.walletName);

    const xpub = await caClient.BC.DOGE.wallet.createXPub(xPubPass).then(response => response.payload.xpub);

    await caClient.BC.DOGE.wallet.getXPubChangeAddresses(xpub, 0, 1);
    await caClient.BC.DOGE.wallet.getXPubReceiveAddresses(xpub, 0, 1);
}

module.exports = Wallet;
