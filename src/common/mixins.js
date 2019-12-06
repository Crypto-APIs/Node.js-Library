const MultisigMixin = {

    /**
     * Multisig Address Endpoint
     *
     * @async
     * @desc The Multisig Address Endpoint strikes a general information about a single address that is involved in multisignature addresses.
     *
     * @param {string} address - Address in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getInfoMultisig(address, queryParams = {}) {
        const combinedQueryParams = {
            limit: 50,
            ...queryParams,
        };

        return this.request.get(this.basePath + this.getSelectedNetwork() + '/address/' + address + '/multisig', combinedQueryParams);
    }

};

module.exports = {
    MultisigMixin,
};
