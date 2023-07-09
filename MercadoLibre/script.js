const mercadolibreButton = document.getElementById('mercadolibre-button');
const mercadolibreList = document.getElementById('mercadolibre-data');

mercadolibreButton.addEventListener('click', () => {
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=ordenadores')
    .then(res => res.json())
    .then(data => {
      mercadolibreList.innerHTML = '';

      data.results.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.title;
        mercadolibreList.appendChild(li);
      });
    })
    .catch(err => console.error(err));
});
