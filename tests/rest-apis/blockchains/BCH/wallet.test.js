async function Wallet(caClient) {
    console.log('\n::BCH Wallet');

    const randomWalletName = Math.random().toString(36).substring(7);
    const randomHDWalletName = randomWalletName + 'Hd';
    const hdWalletPass = 'testhdpass';
    const xPubPass = 'testxpubpass';

    const newAddress = await caClient.BC.BCH.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario
    const newOtherAddress = await caClient.BC.BCH.address.generateAddress().then(response => response.payload.address); // Duplicated but needed for scenario

    const wallet = await caClient.BC.BCH.wallet.createWallet(randomWalletName, [newAddress]).then(response => response.payload);
    const hdWallet = await caClient.BC.BCH.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass).then(response => response.payload);

    await caClient.BC.BCH.wallet.listWallets();
    await caClient.BC.BCH.wallet.listHDWallets();
    await caClient.BC.BCH.wallet.getWallet(wallet.walletName);
    await caClient.BC.BCH.wallet.getHDWallet(hdWallet.walletName);
    await caClient.BC.BCH.wallet.addAddressToWallet(wallet.walletName, [newOtherAddress]);

    const generatedAddress = await caClient.BC.BCH.wallet.generateAddressInWallet(wallet.walletName).then(response => response.payload.address_info.address);
    await caClient.BC.BCH.wallet.generateAddressInHDWallet(hdWallet.walletName, 1, hdWalletPass);

    await caClient.BC.BCH.wallet.removeAddressFromWallet(wallet.walletName, generatedAddress);
    await caClient.BC.BCH.wallet.deleteWallet(wallet.walletName);
    await caClient.BC.BCH.wallet.deleteHDWallet(hdWallet.walletName);

    const xpub = await caClient.BC.BCH.wallet.createXPub(xPubPass).then(response => response.payload.xpub);

    await caClient.BC.BCH.wallet.getXPubChangeAddresses(xpub, 0, 1);
    await caClient.BC.BCH.wallet.getXPubReceiveAddresses(xpub, 0, 1);
}

module.exports = Wallet;
