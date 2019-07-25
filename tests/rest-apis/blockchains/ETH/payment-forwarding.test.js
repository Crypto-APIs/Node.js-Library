async function PaymentForwarding(caClient) {
    console.log('\n::ETH Payment Forwarding');

    await caClient.BC.ETH.paymentForwarding.listPayments();
    await caClient.BC.ETH.paymentForwarding.listPaymentsHistory();

    const testUrl = 'http://testUrl';
    const from = '0x7857af2143cb06ddc1dab5d7844c9402e89717cb';
    const to = '0x4ab47e7b0204d6b3bf0e956db14e63142b9b5ab8';
    const privateKey = '1ddb065abd61315dc8f7632ad4b1a2e136b2fa3b7ab27105e98b7739093a8f2e';
    const confirmations = 1;
    const payment = await caClient.BC.ETH.paymentForwarding.createPaymentForwarding(testUrl, from, to, privateKey, confirmations).then(res => res.payload);

    await caClient.BC.ETH.paymentForwarding.deletePayment(payment.uuid);
}

module.exports = PaymentForwarding;
