$(document).ready(function() {
    // Código Konami
    var konamiCode = '38384040373937396665';
    var inputSequence = '';
  
    $(document).keydown(function(e) {
        inputSequence += e.keyCode.toString();
        if (inputSequence === konamiCode) {
            executeLogoSpin();
            inputSequence = ''; // Reset the sequence after successful entry
        } else if (!konamiCode.startsWith(inputSequence)) {
            inputSequence = ''; // Reset the sequence if wrong keys are pressed
        }
    });
  
    function executeLogoSpin() {
        $('img[alt="LOGO"]').css({ 'transition': 'transform 2s', 'transform': 'rotate(360deg)' });
        setTimeout(function() {
            $('img[alt="LOGO"]').css('transform', '');
        }, 2000);
    }
  
    // Alternância de tema claro e escuro
    $('#themeToggle').click(function() {
        $('body').toggleClass('light-theme dark-theme');
        var theme = $('body').hasClass('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        updateThemeIcons();
    });
  
    function updateThemeIcons() {
        if ($('body').hasClass('dark-theme')) {
            $('.fa-moon').addClass('d-none');
            $('.fa-sun').removeClass('d-none');
        } else {
            $('.fa-sun').addClass('d-none');
            $('.fa-moon').removeClass('d-none');
        }
    }
  
    // Set initial theme on page load
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-theme').removeClass('light-theme');
    } else {
        $('body').addClass('light-theme').removeClass('dark-theme');
    }
    updateThemeIcons();
  
    // Modal de seleção de assentos
    $('#filmes .card a, #filmes2 .card a').click(function(event) {
        event.preventDefault(); // Previne a ação padrão do link
        $('#modalSelecaoAssentos').modal('show'); // Abre o modal
    });
  
    // Função para gerar poltronas
    function gerarPoltronas() {
        const assentosCinema = $('#assentosCinema');
        assentosCinema.empty(); // Limpa os assentos existentes
        let total = 0; // Inicializa o total
  
        for (let i = 0; i < 3; i++) { // 3 fileiras
            const fileira = $('<div>').addClass('d-flex justify-content-center mb-2');
            for (let j = 0; j < 6; j++) { // 6 poltronas por fileira
                const poltrona = $('<button>').addClass('btn border me-1 poltrona');
                poltrona.html(`<i class="fa-solid fa-couch fa-xl"></i><span class="poltrona-numero">${i * 6 + j + 1}</span>`);
                poltrona.on('click', function() {
                    $(this).toggleClass('btn-success'); // Muda a cor para verde
                    const valorPoltrona = 29.90;
                    if ($(this).hasClass('btn-success')) {
                        total += valorPoltrona; // Adiciona o valor ao total
                    } else {
                        total -= valorPoltrona; // Subtrai o valor do total
                    }
                    $('#total').text(`Total: R$${total.toFixed(2)}`); // Atualiza o total
                });
                fileira.append(poltrona);
            }
            assentosCinema.append(fileira);
        }
    }
  
    // Inicializa o modal com as poltronas
    $('#modalSelecaoAssentos').on('show.bs.modal', function() {
        gerarPoltronas(); // Gera as poltronas
    });
  
    // Limpa o total ao fechar o modal
    $('#modalSelecaoAssentos').on('hidden.bs.modal', function() {
        $('#total').text('Total: R$0.00');
    });
  
    // Quando o usuário confirma a seleção de assentos
    $('#confirmarSelecao').click(function() {
        // Armazena as poltronas selecionadas no localStorage
        var poltronasSelecionadas = [];
        $('.poltrona.btn-success').each(function() {
            poltronasSelecionadas.push($(this).find('.poltrona-numero').text());
        });
        localStorage.setItem('poltronasSelecionadas', JSON.stringify(poltronasSelecionadas));
        // Redireciona para a página do carrinho
        window.location.href = 'carrinho.html';
    });
});
