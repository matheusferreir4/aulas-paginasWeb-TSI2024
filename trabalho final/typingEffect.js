document.addEventListener('DOMContentLoaded', () => {
    const text = "Este é um texto adicional que aparece aos poucos, como se estivesse sendo digitado.";
    const typingTextElement = document.getElementById('typing-text');
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const navListElement = document.querySelector('.nav-list');
    const profileImgElement = document.getElementById('profile-img');
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 50); // Ajuste o tempo para controlar a velocidade da digitação
        } else {
            typingTextElement.classList.add('visible');
        }
    }

    function showElements() {
        titleElement.classList.add('visible');
        descriptionElement.classList.add('visible');
        navListElement.classList.add('visible');
        profileImgElement.classList.add('visible');
    }

    // Mostrar os elementos com efeito de cair do céu
    showElements();

    // Iniciar a digitação do texto
    typeText();
});
