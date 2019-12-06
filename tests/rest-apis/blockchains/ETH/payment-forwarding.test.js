async function PaymentForwarding(caClient) {
    console.log('\n::ETH Payment Forwarding');

    await caClient.BC.ETH.paymentForwarding.listPayments();
    await caClient.BC.ETH.paymentForwarding.listPaymentsHistory();
}

module.exports = PaymentForwarding;
