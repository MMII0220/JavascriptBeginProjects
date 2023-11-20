window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const input = document.getElementById('input'), // what we are searching for
    search_icon = document.querySelector('.fa-search'),
    grid = document.querySelector('.grid'); // where our photos display

  window.addEventListener('load', dayNightMode); // when loaded it will be black or white depending on time

  input.addEventListener('keydown', (event) => {
    // when we click enter searching starts
    if (event.key == 'Enter') {
      loadImg();
    }
  });

  search_icon.addEventListener('click', loadImg); // when we click icon searching starts

  // out api for generating photos
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
        console.log(data);
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
      // click two time on image to open it, in new tab
      window.open(photo.links.download, '_blank');
    });
    return imageNode; // returning created fully element with class image
  }

  // appending element on screen
  function appendImagesToGrid(images) {
    images.forEach((image) => {
      grid.appendChild(image);
    });
  }

  // changing screen color
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
