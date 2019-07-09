class BaseBlockchain {

    constructor(req, basePath) {
        this.request = req;
        this.basePath = basePath;
    }

    getInfo(network) {
        return this.request.get(this.basePath + network + '/info');
    }

    getBlockByHash(network, blockHash) {
        return this.request.get(this.basePath + network + '/blocks/' + blockHash);
    }

    getBlockByHeight(network, blockHeight) {
        return this.request.get(this.basePath + network + '/blocks/' + blockHeight);
    }

    getLatestBlock(network) {
        return this.request.get(this.basePath + network + '/blocks/latest');
    }

}