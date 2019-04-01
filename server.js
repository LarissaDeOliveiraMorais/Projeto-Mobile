
// Criando um servidor
const app = require('./src/config/custom-express');

app.listen(3000, function(){
	console.log("Servidor rodando na porta 3000");
});//Essa função obrigatoriamnete deve ser a ultima linha
