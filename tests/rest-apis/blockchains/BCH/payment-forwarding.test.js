async function PaymentForwarding(caClient) {
    console.log('\n::BCH Payment Forwarding');

    await caClient.blockchain.BCH.paymentForwarding.listPayment();
    await caClient.blockchain.BCH.paymentForwarding.listPaymentHistory();

    const testUrl = 'http://testUrl';
    const randomHDWalletName = Math.random().toString(36).substring(7);
    const hdWalletPass = 'testhdpass';

    await caClient.blockchain.BCH.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass); // Duplicated but needed for scenario
    const addresses = await caClient.blockchain.BCH.wallet.generateAddressInHDWallet(randomHDWalletName, 1, hdWalletPass).then(response => response.payload.addresses); // Duplicated but needed for scenario

    const payment = await caClient.blockchain.BCH.paymentForwarding.createPayment(addresses[0].address, addresses[1].address, testUrl, randomHDWalletName, hdWalletPass, 1).then(response => response.payload);
    await caClient.blockchain.BCH.paymentForwarding.deletePayment(payment.uuid);
    await caClient.blockchain.BCH.wallet.deleteHDWallet(randomHDWalletName); // (Cleanup) Duplicated but needed for scenario cleanup
}

module.exports = PaymentForwarding;
