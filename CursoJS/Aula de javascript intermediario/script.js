


function automovel(marca, modelo, cor) {
    this.marca = marca
    this.modelo = modelo
    this.cor = cor

    this.velocidade = function() {
        return '280Km'
    }
}

automovel.prototype.portas = 4;

const hillux = new automovel('ford', 'hillux', 'branco')