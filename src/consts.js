const WH_EVENT = {
    COMMON: {
        NEW_BLOCK: 'NEW_BLOCK',
        CONFIRMED_TX: 'CONFIRMED_TX',
        ADDRESS: 'ADDRESS',
        TRANSACTION_CONFIRMATIONS: 'TRANSACTION_CONFIRMATIONS',
    },
    ETH: {
        TOKEN: 'TOKEN',
        TXPOOL: 'TXPOOL',
    },
    ETC: {
        TXPOOL: 'TXPOOL',
    }
};

module.exports = {
    WH_EVENT: WH_EVENT,
};
