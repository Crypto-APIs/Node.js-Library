async function Wallet(caClient) {
    console.log('\n::BCH Wallet');

    const randomWalletName = Math.random().toString(36).substring(7);
    const randomHDWalletName = randomWalletName + 'Hd';
    const hdWalletPass = 'testhdpass';
    const xPubPass = 'testxpubpass';

    const newAddress = await caClient.blockchain.BCH.address.generateAddress().then(response => response.payload.address);
    await caClient.blockchain.BCH.wallet.createWallet(randomWalletName, [newAddress]);

    await caClient.blockchain.BCH.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass);
    await caClient.blockchain.BCH.wallet.listWallets();
    await caClient.blockchain.BCH.wallet.listHDWallets();
    await caClient.blockchain.BCH.wallet.getWallet(randomWalletName);
    await caClient.blockchain.BCH.wallet.getHDWallet(randomHDWalletName);
    await caClient.blockchain.BCH.wallet.addAddressToWallet(randomWalletName, [newAddress]);

    const generatedAddress = await caClient.blockchain.BCH.wallet.generateAddressInWallet(randomWalletName).then(response => response.payload.address_info.address);
    await caClient.blockchain.BCH.wallet.generateAddressInHDWallet(randomHDWalletName, 1, hdWalletPass);

    await caClient.blockchain.BCH.wallet.removeAddressFromWallet(randomWalletName, generatedAddress);
    await caClient.blockchain.BCH.wallet.deleteWallet(randomWalletName);
    await caClient.blockchain.BCH.wallet.deleteHDWallet(randomHDWalletName);
    await caClient.blockchain.BCH.wallet.createXPub(xPubPass).then(response => response.payload.xpub);

    // caClient.blockchain.BCH.wallet.getXPubChangeAddresses(); // TODO
    // caClient.blockchain.BCH.wallet.getXPubReceiveAddresses(); // TODO
}

module.exports = Wallet;
