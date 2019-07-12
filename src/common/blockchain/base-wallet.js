const BaseChainComponent = require('./base-chain-component');

class BaseWallet extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    createWallet(name, addresses) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets', {
            walletName: name,
            addresses: addresses
        });
    }

    createHDWallet(name, addressCount, password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd', {
            walletName: name,
            addressCount: addressCount,
            password: password
        });
    }

    listWallets() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets');
    }

    listHDWallets() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets/hd');
    }

    getWallet(walletName) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets/' + walletName);
    }

    getHDWallet(walletName) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets/hd/' + walletName);
    }

    addAddressToWallet(name, addresses) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/' + name + '/addresses', {
            addresses: addresses
        });
    }

    generateAddressInWallet(name) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/' + name + '/addresses/generate', {});
    }

    generateAddressInHDWallet(name, addressCount, password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd/' + name + '/addresses/generate', {
            addressCount: addressCount,
            password: password
        });
    }

    removeAddressFromWallet(name, address) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/wallets/' + name + '/address/' + address);
    }

    deleteWallet(name) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/wallets/' + name);
    }

    deleteHDWallet(name) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/wallets/hd/' + name);
    }

    createXPub(password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/wallets/hd/xpub', {
            password: password
        });
    }

    getXPubChangeAddresses(xpub, from, to) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd/xpub/addresses/change', {
            xpub: xpub,
            from: from,
            to: to
        });
    }

    getXPubReceiveAddresses(xpub, from, to) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd/xpub/addresses/receive', {
            xpub: xpub,
            from: from,
            to: to
        });
    }

}

module.exports = BaseWallet;
