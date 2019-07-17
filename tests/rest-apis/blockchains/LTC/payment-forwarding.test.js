async function PaymentForwarding(caClient) {
    console.log('\n::LTC Payment Forwarding');

    await caClient.blockchain.LTC.paymentForwarding.listPayments();
    await caClient.blockchain.LTC.paymentForwarding.listPaymentsHistory();

    const testUrl = 'http://testUrl';
    const randomHDWalletName = Math.random().toString(36).substring(7);
    const hdWalletPass = 'testhdpass';

    await caClient.blockchain.LTC.wallet.createHDWallet(randomHDWalletName, 1, hdWalletPass); // Duplicated but needed for scenario
    const addresses = await caClient.blockchain.LTC.wallet.generateAddressInHDWallet(randomHDWalletName, 1, hdWalletPass).then(response => response.payload.addresses); // Duplicated but needed for scenario

    const payment = await caClient.blockchain.LTC.paymentForwarding.createPaymentForwarding(addresses[0].address, addresses[1].address, testUrl, randomHDWalletName, hdWalletPass, 1).then(response => response.payload);
    await caClient.blockchain.LTC.paymentForwarding.deletePayment(payment.uuid);
    await caClient.blockchain.LTC.wallet.deleteHDWallet(randomHDWalletName); // (Cleanup) Duplicated but needed for scenario cleanup
}

module.exports = PaymentForwarding;
