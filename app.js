let comprimento, largura, altura, litros

function calcular() {
    // Entrada
    comprimento = Number(frmAquario.inputComprimento.value)
    largura = Number(frmAquario.inputLargura.value)
    altura = Number(frmAquario.inputAltura.value)

    // Processamento
    litros = (comprimento * largura * altura) / 1000

    // Saída
    frmAquario.inputLitros.value = litros.toFixed(1)
}