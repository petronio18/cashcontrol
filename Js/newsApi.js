fetch('https://api.worldnewsapi.com/search-news?api-key=8b8a756eee6f4f65b1c5229e11b47d0d&text=tesla')
  .then(response => response.json())
  .then(data => {
    const elementoDados = document.getElementById('dados');

    elementoDados.innerHTML = '';

    if (data.articles && data.articles.length > 0) {
      data.articles.forEach(article => {
        const divNoticia = document.createElement('div');
        divNoticia.classList.add('card', 'mb-3');

        if (article.urlToImage) {
          const img = document.createElement('img');
          img.src = article.urlToImage;
          img.classList.add('card-img-top');
          divNoticia.appendChild(img);
        }

        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');

        const titulo = article.title;
        const tituloElemento = document.createElement('h5');
        tituloElemento.classList.add('card-title');
        tituloElemento.textContent = titulo;

        if (article.author) {
          const autorElemento = document.createElement('p');
          autorElemento.classList.add('card-text');
          autorElemento.textContent = 'Autor: ' + article.author;
          divCardBody.appendChild(autorElemento);
        }

        if (article.description) {
          const descricaoElemento = document.createElement('p');
          descricaoElemento.classList.add('card-text');
          descricaoElemento.textContent = article.description;
          divCardBody.appendChild(descricaoElemento);
        }

        const linkElemento = document.createElement('a');
        linkElemento.href = article.url;
        linkElemento.target = '_blank';
        linkElemento.classList.add('btn', 'btn-primary');
        linkElemento.textContent = 'Ver Notícia Completa';
        divCardBody.appendChild(linkElemento);

        divCardBody.appendChild(tituloElemento);
        divNoticia.appendChild(divCardBody);

        elementoDados.appendChild(divNoticia);
      });
    } else {
      const mensagem = document.createElement('p');
      mensagem.textContent = 'Nenhuma notícia encontrada.';
      elementoDados.appendChild(mensagem);
    }

    console.log(data);
  })
  .catch(error => console.error('Erro:', error));
