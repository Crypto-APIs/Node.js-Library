const Logger = require('./logger');
const lg = Logger.getInstance();

const Response = (res, options, onSuccess, onError) => {
    let responseStr = '';

    res.setEncoding('utf8')
        .on('data', (str) => {
            responseStr += str;
        })
        .on('end', () => {
            try {
                var obj = JSON.parse(responseStr);

                if (res.statusCode !== 200) {
                    const next = () => onError(obj);

                    if (!lg.enabled) {
                        return next();
                    }
                    lg.log(next, options, obj);
                } else {
                    const next = () => onSuccess(obj);

                    if (!lg.enabled) {
                        return next();
                    }
                    lg.log(next, options);
                }
            } catch (e) {
                const next = () => onError(obj);

                if (!lg.enabled) {
                    return next();
                }
                lg.log(next, options, e);
            }
        });
};

module.exports = Response;
