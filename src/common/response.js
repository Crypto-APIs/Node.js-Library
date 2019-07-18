const {DEBUG} = require('../consts');

const Response = (res, onSuccess, onError) => {
    let responseStr = '';

    res.setEncoding('utf8')
        .on('data', (str) => {
            responseStr += str;
        })
        .on('end', () => {
            try {
                var obj = JSON.parse(responseStr);

                if (res.statusCode != 200) {
                    onError(obj);
                } else {
                    onSuccess(obj);
                }
            } catch (e) {
                if (DEBUG) {
                    console.error(e);
                }
                onError(e);
            }
        });
};

module.exports = Response;
