const opciones={

	nombre:{
		alias: 'n',
		demand:true
	},
    matematicas:{
    	demand:true,
		alias: 'm'
    },
	ingles:{
		demand:true,
		alias: 'i'
	},
	programacion:{
		//default:0,
		demand:true,
		alias: 'p'
	}
}
let obternerPromedio = (nota_uno,nota_dos,nota_tres)

const argv = require('yargs')
             .command('promedio','calcular el promedio')
             .argv
module.exports = {
	obternerPromedio,
	argv
};
