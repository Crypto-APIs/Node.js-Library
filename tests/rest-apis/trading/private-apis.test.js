async function PrivateAPIs(caClient) {
    console.log('\n::TR Private APIs');

    const exchanges = await caClient.TR.privateAPIs.listAllExchanges().then(response => response.payload);
}

module.exports = PrivateAPIs;
