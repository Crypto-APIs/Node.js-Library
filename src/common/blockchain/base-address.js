class BaseAddress {

    constructor(req, basePath) {
        this.request = req;
        this.basePath = basePath;
    }

    getInfo(network, address) {
        return this.request.get(this.basePath + network + '/address/' + address);
    }

    generateAddress(network) {
        return this.request.post(this.basePath + network + '/address', {});
    }

    getAddressTransactions(network, address, index = 0, limit = 50) {
        return this.request.get(this.basePath + network + '/address/' + address + '/transactions?index=' + index + '&limit=' + limit);
    }


}