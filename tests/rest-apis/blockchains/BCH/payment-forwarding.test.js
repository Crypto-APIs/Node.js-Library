async function PaymentForwarding(caClient) {
    console.log('\n::BCH Payment Forwarding');

    await caClient.blockchain.BCH.paymentForwarding.listPayment();
    await caClient.blockchain.BCH.paymentForwarding.listPaymentHistory();

    // caClient.blockchain.BCH.paymentForwarding.createPayment(); // TODO OK
    // caClient.blockchain.BCH.paymentForwarding.deletePayment(); // TODO OK
}

module.exports = PaymentForwarding;
