class BaseWallet {

    constructor(req, basePath) {
        this.request = req;
        this.basePath = basePath;
    }

    createWallet(network, name, addresses) {
        return this.request.post(this.basePath + network + '/wallets', {
            walletName: name,
            addresses: addresses
        });
    }

    createHDWallet(network, name, addressCount, password) {
        return this.request.post(this.basePath + network + '/wallets/hd', {
            walletName: name,
            addressCount: addressCount,
            password: password
        });
    }

    listWallets(network) {
        return this.request.get(this.basePath + network + '/wallets');
    }

    listHDWallets(network) {
        return this.request.get(this.basePath + network + '/wallets/hd');
    }

    getWallet(network, walletName) {
        return this.request.get(this.basePath + network + '/wallets/' + walletName);
    }

    getHDWallet(network, walletName) {
        return this.request.get(this.basePath + network + '/wallets/hd/' + walletName);
    }

    addAddressToWallet(network, name, addresses) {
        return this.request.post(this.basePath + network + '/wallets/' + name + '/addresses', {
            addresses: addresses
        });
    }

    generateAddressInWallet(network, name) {
        return this.request.post(this.basePath + network + '/wallets/' + name + '/addresses/generate', {});
    }

    generateAddressInHDWallet(network, name, addressCount, password) {
        return this.request.post(this.basePath + network + '/wallets/hd/' + name + '/addresses/generate', {
            addressCount: addressCount,
            password: password
        });
    }

    removeAddressFromWallet(network, name, address) {
        return this.request.delete(this.basePath + network + '/wallets/' + name + '/address/' + address);
    }

    deleteWallet(network, name) {
        return this.request.delete(this.basePath + network + '/wallets/' + name);
    }

    deleteHDWallet(network, name) {
        return this.request.delete(this.basePath + network + '/wallets/hd/' + name);
    }

    // TODO: A lot of questions here
    createXPub(network, password) {
        return this.request.post(this.basePath + network + '/wallets/wallets/hd/xpub', {
            password: password
        });
    }

    // TODO: A lot of questions here
    getXPubChangeAddresses(network, xpub, from, to) {
        return this.request.post(this.basePath + network + '/wallets/hd/xpub/addresses/change', {
            xpub: xpub,
            from: from,
            to: to
        });
    }

    // TODO: A lot of questions here
    getXPubReceiveAddresses(network, xpub, from, to) {
        return this.request.post(this.basePath + network + '/wallets/hd/xpub/addresses/receive', {
            xpub: xpub,
            from: from,
            to: to
        });
    }

}
