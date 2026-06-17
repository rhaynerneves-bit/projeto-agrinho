// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ROLAGEM SUAVE PARA OS LINKS DO MENU
    const linksDoMenu = document.querySelectorAll('header nav ul li a');

    linksDoMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita o pulo brusco na página
            
            const idAlvo = link.getAttribute('href');
            const secaoAlvo = document.querySelector(idAlvo);

            if (secaoAlvo) {
                // Faz a página deslizar suavemente até a seção
                secaoAlvo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. ENVIO E VALIDAÇÃO DO FORMULÁRIO DE CONTATO
    const formulario = document.querySelector('form');

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página

            // Captura os valores digitados
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            // Validação de segurança básica para campos vazios
            if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
                alert('Por favor, preencha todos os campos antes de enviar.');
                return;
            }

            // Alerta simulando o envio com sucesso dos dados
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso. Nossa equipe do Agro responderá em breve.`);
            
            // Limpa os campos do formulário
            formulario.reset();
        });
    }

    // 3. EFEITO VISUAL NO CABEÇALHO AO ROLAR A PÁGINA
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Escurece o menu quando o usuário rola para baixo
            header.style.backgroundColor = '#1e3f28'; 
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        } else {
            // Volta ao tom original quando está no topo da página
            header.style.backgroundColor = '#2c5e3b';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });

});
