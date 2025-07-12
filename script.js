document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        menuToggle.classList.toggle('open'); 
    });

    // Opcional: Fechar o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        // Se o clique não foi no menuToggle nem dentro da sidebar
        if (!menuToggle.contains(event.target) && !sidebar.contains(event.target)) {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                menuToggle.classList.remove('open');
            }
        }
    });

    
    const sidebarButtons = document.querySelectorAll('.sidebar-button');
    sidebarButtons.forEach(button => {
        button.addEventListener('click', () => {
            sidebar.classList.remove('open');
            menuToggle.classList.remove('open');
        });
    });
});