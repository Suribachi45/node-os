const os = require('os');

module.exports = () => {
    const networkInterfaces = os.networkInterfaces();
    const networkInfo = [];

    for (const interfaceName in networkInterfaces) {
        networkInterfaces[interfaceName].forEach(network => {
            networkInfo.push({
                interfaz: interfaceName,
                familia: network.family,
                direccion: network.address,
                interno: network.internal
            });
        });
    }

    return networkInfo;
};