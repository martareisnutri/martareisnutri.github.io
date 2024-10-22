document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".beneficios .card");
    let currentIndex = 0; // Começa no primeiro card

    // Mostra o card inicial
    cards[currentIndex].classList.add("active");

    // Função para atualizar a exibição do card
    function updateCardDisplay() {
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    }

    // Função para ir para o próximo card com comportamento circular
    document.getElementById("next-btn").addEventListener("click", function () {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta para o primeiro card se estiver no último
        }
        updateCardDisplay();
    });

    // Função para ir para o card anterior com comportamento circular
    document.getElementById("prev-btn").addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1; // Vai para o último card se estiver no primeiro
        }
        updateCardDisplay();
    });
});
