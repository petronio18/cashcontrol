fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7a100e41622f4c288d3d6a7cfbda878b')
  .then(response => response.json())
  .then(data => {
    // Faça algo com os dados obtidos, como exibi-los na tela
    const elementoDados = document.getElementById('dados');

    // Limpa o conteúdo anterior
    elementoDados.innerHTML = '';

    // Verifica se há notícias
    if (data.articles && data.articles.length > 0) {
      // Itera sobre as notícias e cria um cartão Bootstrap para cada notícia
      data.articles.forEach(article => {
        const divNoticia = document.createElement('div');
        divNoticia.classList.add('card', 'mb-3');

        // Adiciona a imagem da notícia (se disponível)
        if (article.urlToImage) {
          const img = document.createElement('img');
          img.src = article.urlToImage;
          img.classList.add('card-img-top');
          divNoticia.appendChild(img);
        }

        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');

        // Adiciona o título da notícia
        const titulo = article.title;
        const tituloElemento = document.createElement('h5');
        tituloElemento.classList.add('card-title');
        tituloElemento.textContent = titulo;

        // Adiciona o autor da notícia (se disponível)
        if (article.author) {
          const autorElemento = document.createElement('p');
          autorElemento.classList.add('card-text');
          autorElemento.textContent = 'Autor: ' + article.author;
          divCardBody.appendChild(autorElemento);
        }

        // Adiciona a descrição da notícia (se disponível)
        if (article.description) {
          const descricaoElemento = document.createElement('p');
          descricaoElemento.classList.add('card-text');
          descricaoElemento.textContent = article.description;
          divCardBody.appendChild(descricaoElemento);
        }

        // Adiciona um link para a notícia completa
        const linkElemento = document.createElement('a');
        linkElemento.href = article.url;
        linkElemento.target = '_blank'; // Abre o link em uma nova aba
        linkElemento.classList.add('btn', 'btn-primary');
        linkElemento.textContent = 'Ver Notícia Completa';
        divCardBody.appendChild(linkElemento);

        // Adiciona todos os elementos ao cartão
        divCardBody.appendChild(tituloElemento);
        divNoticia.appendChild(divCardBody);

        elementoDados.appendChild(divNoticia);
      });
    } else {
      // Caso não haja notícias
      const mensagem = document.createElement('p');
      mensagem.textContent = 'Nenhuma notícia encontrada.';
      elementoDados.appendChild(mensagem);
    }

    console.log(data);
  })
  .catch(error => console.error('Erro:', error));
