// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let exchange = {};
    let h = 50;
    let q = 25;
    let d = 10;
    let n = 5;
    let p = 1;
    if (currency < 10000 && currency > 0) {
        exchange["H"] = Math.floor(currency / h);
        exchange["Q"] = Math.floor((currency % h) / q);
        exchange["D"] = Math.floor(((currency % h) % q) / d);
        exchange["N"] = Math.floor((((currency % h) % q) % d) / n);
        exchange["P"] = Math.floor(((((currency % h) % q) % d) % n) / p);
        for (let key in exchange) {
            if (exchange[key] === 0) {
                delete exchange[key];
            }
        }
        return exchange;
    } else if (currency >= 10000) {
        exchange.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
        return exchange;
    } else {
        return exchange;
    }
}