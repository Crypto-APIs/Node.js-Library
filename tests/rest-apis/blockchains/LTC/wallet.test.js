async function Wallet(caClient) {
    console.log('\n::LTC Wallet');

    const randomWalletName = Math.random().toString(36).substring(7);
    const randomHDWalletName = randomWalletName + 'Hd';
    const hdWalletPass = 'testhdpass';
    const xPubPass = 'testxpubpass';

    const newAddress = await caClient.blockchain.LTC.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario
    const newOtherAddress = await caClient.blockchain.LTC.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario

    const wallet = await caClient.blockchain.LTC.wallet.createWallet(randomWalletName, [newAddress]).then(response => response.payload);
    const hdWallet = await caClient.blockchain.LTC.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass).then(response => response.payload);

    await caClient.blockchain.LTC.wallet.listWallets();
    await caClient.blockchain.LTC.wallet.listHDWallets();
    await caClient.blockchain.LTC.wallet.getWallet(wallet.walletName);
    await caClient.blockchain.LTC.wallet.getHDWallet(hdWallet.walletName);
    await caClient.blockchain.LTC.wallet.addAddressToWallet(wallet.walletName, [newOtherAddress]);

    const generatedAddress = await caClient.blockchain.LTC.wallet.generateAddressInWallet(wallet.walletName).then(response => response.payload.address_info.address);
    await caClient.blockchain.LTC.wallet.generateAddressInHDWallet(hdWallet.walletName, 1, hdWalletPass);

    await caClient.blockchain.LTC.wallet.removeAddressFromWallet(wallet.walletName, generatedAddress);
    await caClient.blockchain.LTC.wallet.deleteWallet(wallet.walletName);
    await caClient.blockchain.LTC.wallet.deleteHDWallet(hdWallet.walletName);

    const xpub = await caClient.blockchain.LTC.wallet.createXPub(xPubPass).then(response => response.payload.xpub);

    await caClient.blockchain.LTC.wallet.getXPubChangeAddresses(xpub, 0, 1);
    await caClient.blockchain.LTC.wallet.getXPubReceiveAddresses(xpub, 0, 1);
}

module.exports = Wallet;
