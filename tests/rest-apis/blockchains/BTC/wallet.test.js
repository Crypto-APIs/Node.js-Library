async function Wallet(caClient) {
    console.log('\n::BTC Wallet');

    const randomWalletName = Math.random().toString(36).substring(7);
    const randomHDWalletName = randomWalletName + 'Hd';
    const hdWalletPass = 'testhdpass';
    const xPubPass = 'testxpubpass';

    const newAddress = await caClient.BC.BTC.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario
    const newOtherAddress = await caClient.BC.BTC.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario

    const wallet = await caClient.BC.BTC.wallet.createWallet(randomWalletName, [newAddress]).then(response => response.payload);
    const hdWallet = await caClient.BC.BTC.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass).then(response => response.payload);

    await caClient.BC.BTC.wallet.listWallets();
    await caClient.BC.BTC.wallet.listHDWallets();
    await caClient.BC.BTC.wallet.getWallet(wallet.walletName);
    await caClient.BC.BTC.wallet.getHDWallet(hdWallet.walletName);
    await caClient.BC.BTC.wallet.addAddressToWallet(wallet.walletName, [newOtherAddress]);

    const generatedAddress = await caClient.BC.BTC.wallet.generateAddressInWallet(wallet.walletName).then(response => response.payload.address_info.address);
    await caClient.BC.BTC.wallet.generateAddressInHDWallet(hdWallet.walletName, 1, hdWalletPass);

    await caClient.BC.BTC.wallet.removeAddressFromWallet(wallet.walletName, generatedAddress);
    await caClient.BC.BTC.wallet.deleteWallet(wallet.walletName);
    await caClient.BC.BTC.wallet.deleteHDWallet(hdWallet.walletName);

    const xpub = await caClient.BC.BTC.wallet.createXPub(xPubPass).then(response => response.payload.xpub);

    await caClient.BC.BTC.wallet.getXPubChangeAddresses(xpub, 0, 1);
    await caClient.BC.BTC.wallet.getXPubReceiveAddresses(xpub, 0, 1);
}

module.exports = Wallet;
