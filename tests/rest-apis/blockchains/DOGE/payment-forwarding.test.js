async function PaymentForwarding(caClient) {
    console.log('\n::DOGE Payment Forwarding');

    await caClient.blockchain.DOGE.paymentForwarding.listPayments();
    await caClient.blockchain.DOGE.paymentForwarding.listPaymentsHistory();

    const testUrl = 'http://testUrl';
    const randomHDWalletName = Math.random().toString(36).substring(7);
    const hdWalletPass = 'testhdpass';

    await caClient.blockchain.DOGE.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass); // Duplicated but needed for scenario
    const addresses = await caClient.blockchain.DOGE.wallet.generateAddressInHDWallet(randomHDWalletName, 1, hdWalletPass).then(response => response.payload.addresses); // Duplicated but needed for scenario

    const payment = await caClient.blockchain.DOGE.paymentForwarding.createPaymentForwarding(addresses[0].address, addresses[1].address, testUrl, randomHDWalletName, hdWalletPass, 1).then(response => response.payload);
    await caClient.blockchain.DOGE.paymentForwarding.deletePayment(payment.uuid);
    await caClient.blockchain.DOGE.wallet.deleteHDWallet(randomHDWalletName); // (Cleanup) Duplicated but needed for scenario cleanup
}

module.exports = PaymentForwarding;
