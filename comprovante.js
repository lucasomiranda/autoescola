const avanca = document.getElementById('avanca');
if (avanca) {
    avanca.addEventListener('click', function() {
        const aulaSelecionada = document.querySelector('input[name="aula"]:checked');
        if (aulaSelecionada) {
            localStorage.setItem('aulaSelecionada', aulaSelecionada.value);
        }
    });
}

const tipoAula = document.getElementById('colocartipodeaula');
if (tipoAula) {
    tipoAula.textContent = localStorage.getItem('aulaSelecionada') || 'Não informada';
}
const verAulas = document.getElementById('Ver');
if (verAulas) {
    verAulas.addEventListener('click', function() {
        window.location.href = 'aulas.html';
    });
}

const reagendarAula = document.getElementById('Reagendar');
if (reagendarAula) {
    reagendarAula.addEventListener('click', function() {
        window.location.href = 'aulas.html';
    });
}

const voltar = document.getElementById('voltar');
if (voltar) {
    voltar.addEventListener('click', function() {
        if (confirm('Deseja realmente voltar para a página de aulas?')) {
            window.location.href = 'aulas.html';
        }
    });
}
    
