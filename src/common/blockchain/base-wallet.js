const BaseChainComponent = require('./base-chain-component');

class BaseWallet extends BaseChainComponent {

    constructor(...props) {
        super(...props);
    }

    /**
     * POST /bc/bch/{network}/wallets
     */
    createWallet(name, addresses) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets', {
            walletName: name,
            addresses: addresses
        });
    }

    /**
     * POST /bc/bch/{network}/wallets/hd
     */
    createHDWallet(name, addressCount, password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd', {
            walletName: name,
            addressCount: addressCount,
            password: password
        });
    }

    /**
     * GET /bc/bch/{network}/wallets
     */
    listWallets() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets');
    }

    /**
     * GET /bc/bch/{network}/wallets/hd
     */
    listHDWallets() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets/hd');
    }

    /**
     * GET /bc/bch/{network}/wallets/{walletName}
     */
    getWallet(walletName) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets/' + walletName);
    }

    /**
     * GET /bc/bch/{network}/wallets/hd/{walletName}
     */
    getHDWallet(walletName) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets/hd/' + walletName);
    }

    /**
     * POST /bc/bch/{network}/wallets/{name}/addresses
     */
    addAddressToWallet(name, addresses) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/' + name + '/addresses', {
            addresses: addresses
        });
    }

    /**
     * POST /bc/bch/{network}/wallets/{name}/addresses/generate
     */
    generateAddressInWallet(name) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/' + name + '/addresses/generate', {});
    }

    /**
     * POST /bc/bch/{network}/wallets/hd/{name}/addresses/generate
     */
    generateAddressInHDWallet(name, addressCount, password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd/' + name + '/addresses/generate', {
            addressCount: addressCount,
            password: password
        });
    }

    /**
     * DELETE /bc/bch/{network}/wallets/{name}/address/{address}
     */
    removeAddressFromWallet(name, address) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/wallets/' + name + '/address/' + address);
    }

    /**
     * DELETE /bc/bch/{network}/wallets/{name}
     */
    deleteWallet(name) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/wallets/' + name);
    }

    /**
     * DELETE /bc/bch/{network}/wallets/hd/{name}
     */
    deleteHDWallet(name) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/wallets/hd/' + name);
    }

    /**
     * POST /bc/bch/{network}/wallets/hd/xpub
     */
    createXPub(password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd/xpub', {
            password: password
        });
    }

    /**
     * POST /bc/bch/{network}/wallets/hd/xpub/addresses/change
     */
    getXPubChangeAddresses(xpub, from, to) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd/xpub/addresses/change', {
            xpub: xpub,
            from: from,
            to: to
        });
    }

    /**
     * POST /bc/bch/{network}/wallets/hd/xpub/addresses/receive
     */
    getXPubReceiveAddresses(xpub, from, to) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd/xpub/addresses/receive', {
            xpub: xpub,
            from: from,
            to: to
        });
    }

}

module.exports = BaseWallet;
