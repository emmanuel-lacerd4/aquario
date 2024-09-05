let comprimento, largura, altura, litros

function calcular() {
    // Entrada
    comprimento = Number(frmAquario.txtComprimento.value)
    largura = Number(frmAquario.txtLargura.value)
    altura = Number(frmAquario.txtAltura.value)

    // Processamento
    litros = (comprimento * largura * altura) / 1000

    // Saída
    frmAquario.txtLitros.value = litros.toFixed(1)

}