const osModule = require('./osModule');
const networkModule = require('./networkModule');

const systemInfo = osModule();
const networkInfo = networkModule();

console.log('Información del Sistema Operativo');
console.log('------------------------------------');
console.log(systemInfo);

console.log('\nInformación de las Interfaces de Red');
console.log('------------------------------------');
networkInfo.forEach(interface => {
    console.log(`Interfaz ${interface.interfaz}:`);
    console.log(`  Familia: ${interface.familia}`);
    console.log(`  Dirección: ${interface.direccion}`);
    console.log(`  Interno: ${interface.interno}`);
});