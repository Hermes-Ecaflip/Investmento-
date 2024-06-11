document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os métodos de pagamento
    var paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    var paymentFormContainer = document.getElementById('payment-form-container');

    // Função para criar formulário de pagamento
    function createPaymentForm(method) {
        var formHtml = '';
        switch(method) {
            case 'paypal':
                formHtml = '<div class="payment-form">' +
                           '<label for="paypalEmail">E-mail do PayPal:</label>' +
                           '<input type="email" id="paypalEmail" name="paypalEmail" required>' +
                           '</div>';
                break;
            case 'pix':
                formHtml = '<div class="payment-form">' +
                           '<label for="pixKey">Chave PIX:</label>' +
                           '<input type="text" id="pixKey" name="pixKey" required>' +
                           '</div>';
                break;
            case 'creditCard':
                formHtml = '<div class="payment-form">' +
                           '<label for="cardNumber">Número do Cartão:</label>' +
                           '<input type="text" id="cardNumber" name="cardNumber" required>' +
                           '<label for="cardExpiration">Validade:</label>' +
                           '<input type="text" id="cardExpiration" name="cardExpiration" required>' +
                           '<label for="cardCvv">CVV:</label>' +
                           '<input type="text" id="cardCvv" name="cardCvv" required>' +
                           '</div>';
                break;
            case 'boleto':
                formHtml = '<div class="payment-form">' +
                           '<label for="cpf">CPF:</label>' +
                           '<input type="text" id="cpf" name="cpf" required>' +
                           '</div>';
                break;
        }
        paymentFormContainer.innerHTML = formHtml;
    }

    // Adiciona evento de clique para cada método de pagamento
    paymentMethods.forEach(function(method) {
        method.addEventListener('change', function() {
            if(this.checked) {
                createPaymentForm(this.id);
            }
        });
    });

    // Evento para o botão de finalizar compra
    document.getElementById('finalize-purchase').addEventListener('click', function() {
        var selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        if(selectedPaymentMethod) {
            // Aqui você pode adicionar a lógica para processar o pagamento
            alert('Compra finalizada com ' + selectedPaymentMethod.id + '. Obrigado por comprar conosco!');
        } else {
            alert('Por favor, selecione um método de pagamento.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Aplicar cupom
    var applyCouponButton = document.querySelector('#cupom button');
    var couponInput = document.querySelector('#cupom input');
    
    applyCouponButton.addEventListener('click', function() {
        var cupomCode = couponInput.value;
        if(cupomCode === 'DESCONTO10') {
            alert('Cupom de 10% aplicado com sucesso!');
            // Aqui você pode adicionar a lógica para aplicar o desconto
        } else {
            alert('Cupom inválido. Tente novamente.');
        }
    });
});