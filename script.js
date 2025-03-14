// // Selecionar a imagem principal
// const imagemCopo = document.querySelector('.image-copo');

// // Selecionar todos os botões do menu
// const botoesMenu = document.querySelectorAll('.botao-menu');

// // Adicionar evento de clique para cada botão do menu
// botoesMenu.forEach(botao => {
//   botao.addEventListener('click', function() {
//     // Obter o caminho da imagem clicada
//     const novoCaminho = this.src;

//     // Extrair o nome do arquivo (thumb1.png, thumb2.png, thumb3.png)
//     const nomeArquivo = novoCaminho.split('/').pop();

//     // Substituir "thumb" por "img" para obter o nome do arquivo principal
//     // Ex: thumb1.png -> img1.png
//     const novoArquivoPrincipal = nomeArquivo.replace('thumb', 'img');

//     // Criar o novo caminho completo
//     const novoCaminhoPrincipal = './assets/' + novoArquivoPrincipal;

//     // Atualizar a imagem principal
//     imagemCopo.src = novoCaminhoPrincipal;

//     // Opcional: Mudar a cor de fundo com base na imagem selecionada
//     if (nomeArquivo === 'thumb1.png') {
//       document.body.style.background = '#0f7';
//     } else if (nomeArquivo === 'thumb2.png') {
//       document.body.style.background = '#f02';
//     } else if (nomeArquivo === 'thumb3.png') {
//       document.body.style.background = '#5c3';
//     }
//   });
//});

let circulo = document.querySelector(".circulo");
let imagem = document.querySelector(".copo");

function trocarACor(cor) {
  circulo.style.background = cor;
}
function trocarImagem(endereco) {
  imagem.src = endereco;
}
