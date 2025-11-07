document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA DAS ABAS (TABS) ---
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", () => {
            const tabId = link.getAttribute("data-tab");

            // 1. Remove 'active' de todos os links e conteúdos
            tabLinks.forEach(item => item.classList.remove("active"));
            tabContents.forEach(item => item.classList.remove("active"));

            // 2. Adiciona 'active' ao link clicado e ao conteúdo correspondente
            link.classList.add("active");
            document.getElementById(tabId).classList.add("active");
        });
    });


    // --- LÓGICA DA ABA DE PESQUISA (MUDAR RÓTULO) ---
    const searchForm = document.getElementById("search-form");
    const searchInputLabel = document.querySelector("label[for='search-value']");
    const searchRadios = document.querySelectorAll("input[name='search-type']");

    if (searchForm) {
        searchRadios.forEach(radio => {
            radio.addEventListener("change", (event) => {
                // Pega o "value" do rádio selecionado e atualiza o rótulo
                const newLabel = event.target.value;
                searchInputLabel.textContent = newLabel;
            });
        });
    }
});
