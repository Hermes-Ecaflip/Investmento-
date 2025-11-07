document.addEventListener("DOMContentLoaded", function() {

    // --- 1. LÓGICA DOS CARDS DE LINHA (PASSO 1) ---
    const lineCards = document.querySelectorAll('.line-card');

    lineCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove 'selected' de todos
            lineCards.forEach(c => c.classList.remove('selected'));
            
            // Adiciona 'selected' ao clicado
            card.classList.add('selected');
            
            // Marca o input de rádio dentro dele
            const radio = card.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        });
    });

    // --- 2. LÓGICA DE "VER DETALHES" (PASSO 1) ---
    const detailToggles = document.querySelectorAll('.details-toggle');
    
    detailToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); // Impede a página de pular
            e.stopPropagation(); // Impede que o clique ative a seleção do card
            
            const details = toggle.nextElementSibling; // Pega .hidden-details
            if (details.style.display === 'block') {
                details.style.display = 'none';
                toggle.textContent = 'Ver mais detalhes ▾';
            } else {
                details.style.display = 'block';
                toggle.textContent = 'Ocultar detalhes ▴';
            }
        });
    });

    // --- 3. LÓGICA DAS ABAS DE SERVIÇO (PASSO 2) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.service-tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' de todos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Adiciona 'active' ao clicado e seu conteúdo
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // --- 4. LÓGICA DO ACORDEÃO (PASSO 2) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement; // .accordion-item
            const body = header.nextElementSibling; // .accordion-body
            
            if (item.classList.contains('open')) {
                // Fecha o item
                item.classList.remove('open');
                body.style.display = 'none';
                header.querySelector('.icon').textContent = '+';
            } else {
                // Abre o item
                item.classList.add('open');
                body.style.display = 'block';
                header.querySelector('.icon').textContent = '×'; // ou '-'
            }
        });
    });

});
