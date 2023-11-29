fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=7a100e41622f4c288d3d6a7cfbda878b')
  .then(response => response.json())
  .then(data => {
    // Faça algo com os dados obtidos, como exibi-los na tela
    const elementoDados = document.getElementById('dados');
    elementoDados.innerHTML = 'Dados recebidos: ' + data +' <p>Título: ${}</p>';
    
    console.log(data);
  })
  .catch(error => console.error('Erro:', error));

 