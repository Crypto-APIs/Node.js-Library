async function PaymentForwarding(caClient) {
    console.log('\n::ETC Payment Forwarding');

    await caClient.BC.ETC.paymentForwarding.listPayments();
    await caClient.BC.ETC.paymentForwarding.listPaymentsHistory();
}

module.exports = PaymentForwarding;
