const calculadora = require('../calculadora/calculadora');

exports.calcular = (req, res) => {
    const { num1, num2, operacao } = req.body;

    if (isNaN(num1) || isNaN(num2)) {
        return res.redirect('/?erro=Valores inválidos');
    }

    const resultado = calculadora.calcularOperacao(num1, num2, operacao);

    res.redirect(`/resultado?resultado=${resultado}&operacao=${operacao}`);
};
