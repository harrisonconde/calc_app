exports.calcularOperacao = (num1, num2, operacao) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            return num1 / num2;
        default:
            return 'Operação inválida';
    }
};
