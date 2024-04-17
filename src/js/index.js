/*
  Objetivo 1 - quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no html

      Passo 1 - pegar o botão mostrar mais no JS, pra poder verificar quando o usuário cliclar em cima dele

      Passo 2 - identificar o clique do botão

      Passo 3 - adicionar a classe "ativo" nos projetos escondidos
  
  Objetivo 2 - esconder o botão de mostrar mais 
  
      Passo 1 -pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais, deve abrir os projetos que estão escondidos no html

//Passo 1 - pegar o botão mostrar mais no JS, pra poder verificar quando o usuário cliclar em cima dele

const botaoMostarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

botaoMostarProjetos.addEventListener('click', () => {
    //Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();

    //Objetivo 2 - esconder o botão de mostrar mais
    //Passo 1 -pegar o botão e esconder ele
    esconderBotao();

});

function esconderBotao() {
  botaoMostarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo');
  });
}
