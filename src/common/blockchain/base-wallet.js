const BaseChainComponent = require('./base-chain-component');

class BaseWallet extends BaseChainComponent {

    /**
     * Create Wallet Endpoint
     *
     * @async
     * @desc This endpoint allows you to create a new wallet.
     *
     * @param {string} name - Wallet name.
     * @param {Array} addresses - Array of addresses that will be added to wallet.
     *
     * @returns {*|Promise<any | never>}
     */
    createWallet(name, addresses) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets', {
            walletName: name,
            addresses: addresses
        });
    }

    /**
     * Create HD Wallet Endpoint
     *
     * @async
     * @desc This endpoint allows you to create a new HD wallet.
     *
     * @param {string} name - Wallet name.
     * @param {number} addressCount - Number of addresses that should be generated in the new wallet.
     * @param {string} password - Wallet password.
     *
     * @returns {*|Promise<any | never>}
     */
    createHDWallet(name, addressCount, password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd', {
            walletName: name,
            addressCount: addressCount,
            password: password
        });
    }

    /**
     * List Wallets Endpoint
     *
     * @async
     * @desc This endpoint returns a string array of active wallet names under the token you queried. You can then query
     *      detailed information on individual wallets (via their names) by leveraging the Get Wallet Endpoint.
     *
     * @returns {*|Promise<any | never>}
     */
    listWallets() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets');
    }

    /**
     * List HD Wallets Endpoint
     *
     * @async
     * @desc This endpoint returns a string array of active wallet names under the token you queried. You can then query
     *      detailed information on individual wallets (via their names) by leveraging the Get Wallet Endpoint.
     *
     * @returns {*|Promise<any | never>}
     */
    listHDWallets() {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets/hd');
    }

    /**
     * Get Wallet Endpoint
     *
     * @async
     * @desc This endpoint returns a Wallet.
     *
     * @param {string} walletName - Wallet name.
     *
     * @returns {*|Promise<any | never>}
     */
    getWallet(walletName) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets/' + walletName);
    }

    /**
     * Get HD Wallet Endpoint
     *
     * @async
     * @desc This endpoint returns a HD Wallet.
     *
     * @param {string} walletName - Wallet name.
     *
     * @returns {*|Promise<any | never>}
     */
    getHDWallet(walletName) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/wallets/hd/' + walletName);
    }

    /**
     * Add Addresses to Wallet Endpoint
     *
     * @async
     * @desc This endpoint allows you to add public addresses to the wallet, by POSTing a partially filled out Wallet
     *      object. You only need to include the additional addresses in a new addresses array in the object. If
     *      successful, it will return the newly modified Wallet, including an up-to-date, complete listing of addresses.
     *
     * @param {string} name - Wallet name.
     * @param {Array} addresses - Array of addresses that will be added to wallet.
     *
     * @returns {*|Promise<any | never>}
     */
    addAddressToWallet(name, addresses) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/' + name + '/addresses', {
            addresses: addresses
        });
    }

    /**
     * Generate Address in Wallet Endpoint
     *
     * @async
     * @desc This endpoint allows you to generate a new address associated with the wallet, similar to the Generate
     *      Address Endpoint. If successful, it will returned the newly modified Wallet.
     *
     * @param {string} name - Wallet name.
     * @returns {*|Promise<any | never>}
     */
    generateAddressInWallet(name) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/' + name + '/addresses/generate', {});
    }

    /**
     * Generate Address in HD Wallet Endpoint
     *
     * @async
     * @desc This endpoint allows you to generate a new address associated with the wallet, similar to the Generate
     *      Address Endpoint. If successful, it will returned the newly modified Wallet.
     *
     * @param {string} name - Wallet name.
     * @param {number} addressCount - Number of addresses that should be generated in the wallet.
     * @param {string} password - Wallet password.
     *
     * @returns {*|Promise<any | never>}
     */
    generateAddressInHDWallet(name, addressCount, password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd/' + name + '/addresses/generate', {
            addressCount: addressCount,
            password: password
        });
    }

    /**
     * Remove Addresses from Wallet Endpoint
     *
     * @async
     * @desc This endpoint allows you to delete an address associated with the wallet.
     *
     * @param {string} name - Wallet name.
     * @param {string} address - Address which should be deleted.
     *
     * @returns {*|Promise<any | never>}
     */
    removeAddressFromWallet(name, address) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/wallets/' + name + '/address/' + address);
    }

    /**
     * Delete Wallet Endpoint
     *
     * @async
     * @desc This endpoint deletes the Wallet.
     *
     * @param {string} name - Wallet name.
     *
     * @returns {*|Promise<any | never>}
     */
    deleteWallet(name) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/wallets/' + name);
    }

    /**
     * Delete HD Wallet Endpoint
     *
     * @async
     * @desc This endpoint deletes the HD Wallet.
     *
     * @param {string} name - Wallet name.
     *
     * @returns {*|Promise<any | never>}
     */
    deleteHDWallet(name) {
        return this.request.delete(this.basePath + this.getSelectedNetwork() + '/wallets/hd/' + name);
    }

    /**
     * Create XPub Endpoint
     *
     * @async
     * @desc Create XPub Endpoint allows you to create a random extended public key (based on your password), xpriv and wif.
     *
     * @param {string} password
     *
     * @returns {*|Promise<any | never>}
     */
    createXPub(password) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd/xpub', {
            password: password
        });
    }

    /**
     * Get XPub Change Addresses Endpoint
     *
     * @async
     * @desc Get XPub Change Addresses Endpoint allows you to get the change(KeyPurpose: Change) addresses associated
     *      with the specified xpub. Since those are hierarchically ordered we provide the arguments from and to - both
     *      integeres, in order to be able to get the addresses in the specific positions. If you request, e.g. "from": 0
     *      and "to": 50, this will return the first 50 change addresses linked to the specified xpub.
     *
     * @param {string} xpub
     * @param {number} from
     * @param {number} to
     *
     * @returns {*|Promise<any | never>}
     */
    getXPubChangeAddresses(xpub, from, to) {
        return this.request.post(this.basePath + this.getSelectedNetwork() + '/wallets/hd/xpub/addresses/change', {
            xpub: xpub,
            from: from,
            to: to
        });
    }

    /**
     * Get XPub Receive Addresses Endpoint
     *
     * @async
     * @desc Get XPub receive Addresses Endpoint allows you to get the receive(KeyPurpose: RECEIVE_FUNDS) addresses
     *      associated with the specified xpub. Since those are hierarchically ordered we provide the arguments from and
     *      to - both integeres, in order to be able to get the addresses in the specific positions. If you request,
     *      e.g. "from": 0 and "to": 50, this will return the first 50 receive addresses linked to the specified xpub.
     *
     * @param {string} xpub
     * @param {number} from
     * @param {number} to
     *
     * @returns {*|Promise<any | never>}
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
