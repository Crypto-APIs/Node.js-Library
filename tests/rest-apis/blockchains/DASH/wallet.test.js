async function Wallet(caClient) {
    console.log('\n::DASH Wallet');

    const randomWalletName = Math.random().toString(36).substring(7);
    const randomHDWalletName = randomWalletName + 'Hd';
    const hdWalletPass = 'testhdpass';
    const xPubPass = 'testxpubpass';

    const newAddress = await caClient.BC.DASH.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario
    const newOtherAddress = await caClient.BC.DASH.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario

    const wallet = await caClient.BC.DASH.wallet.createWallet(randomWalletName, [newAddress]).then(response => response.payload);
    const hdWallet = await caClient.BC.DASH.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass).then(response => response.payload);

    await caClient.BC.DASH.wallet.listWallets();
    await caClient.BC.DASH.wallet.listHDWallets();
    await caClient.BC.DASH.wallet.getWallet(wallet.walletName);
    await caClient.BC.DASH.wallet.getHDWallet(hdWallet.walletName);
    await caClient.BC.DASH.wallet.addAddressToWallet(wallet.walletName, [newOtherAddress]);

    const generatedAddress = await caClient.BC.DASH.wallet.generateAddressInWallet(wallet.walletName).then(response => response.payload.address_info.address);
    await caClient.BC.DASH.wallet.generateAddressInHDWallet(hdWallet.walletName, 1, hdWalletPass);

    await caClient.BC.DASH.wallet.removeAddressFromWallet(wallet.walletName, generatedAddress);
    await caClient.BC.DASH.wallet.deleteWallet(wallet.walletName);
    await caClient.BC.DASH.wallet.deleteHDWallet(hdWallet.walletName);

    const xpub = await caClient.BC.DASH.wallet.createXPub(xPubPass).then(response => response.payload.xpub);

    await caClient.BC.DASH.wallet.getXPubChangeAddresses(xpub, 0, 1);
    await caClient.BC.DASH.wallet.getXPubReceiveAddresses(xpub, 0, 1);
}

module.exports = Wallet;
