const os = require('os');

module.exports = () => {
    const systemInfo = {
        nombre: os.type(),
        tipo: os.type(),
        version: os.version(),
        arquitectura: os.arch(),
        cpus: os.cpus().length,
        memoriaTotal: (os.totalmem() / 1024 / 1024).toFixed(2), // Convertir a MB
        memoriaLibre: (os.freemem() / 1024 / 1024).toFixed(2) // Convertir a MB
    };
    return systemInfo;
};