'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input'),
    grid = document.querySelector('.grid');

  window.addEventListener('load', dayNightMode);

  input.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
      loadImg();
    }
  });

  function loadImg() {
    removeImages();
    const url =
      'https://api.unsplash.com/search/photos/?query=' +
      input.value +
      '&per_page=9&client_id=ncLZ1ThNf82aFoaHLO9z44zHYJjJEbRciPPboTM-4NM';

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Statsu: ${response.status}`);
        }
        return response.json();
      })

      .then((data) => {
        const imageNodes = data.results.map(createImageNode);
        appendImagesToGrid(imageNodes);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }

  function removeImages() {
    grid.innerHTML = '';
  }

  function createImageNode(photo) {
    const imageNode = document.createElement('div');
    imageNode.className = 'img';
    imageNode.style.backgroundImage = `url(${photo.urls.raw})`;
    imageNode.addEventListener('dblclick', () => {
      window.open(photo.links.download, '_blank');
    });
    return imageNode;
  }

  function appendImagesToGrid(images) {
    images.forEach((image) => {
      grid.appendChild(image);
    });
  }

  function dayNightMode() {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 7 && hour <= 19) {
      document.body.style.backgroundColor = 'whitesmoke';
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }
});
