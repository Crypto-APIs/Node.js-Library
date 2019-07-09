class BCHAddress extends BaseAddress {

    constructor(...props) {
        super(...props);
    }

    getInfoMultisig(network, address) {
        return this.request.get(this.basePath + network + '/address/' + address + '/multisig');
    }
}

module.exports = BCHAddress;