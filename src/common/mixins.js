const MultisigMixin = {

    /**
     * GET /bc/bch/{network}/address/{address}/multisig?limit={limit}
     */
    getInfoMultisig(address, limit = 50) {
        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/multisig?limit=' + limit);
    }

};

module.exports = {
    MultisigMixin,
};
