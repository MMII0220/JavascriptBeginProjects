window.addEventListener('DOMContentLoaded', () => {
  const quoteArray = [];
  let index = 0;
  let textPosition = 0;
  let flag = true;

  const loadQuote = async () => {
    const url = 'https://api.quotable.io/random';

    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })

      .then((data) => {
        console.log(data);
        quoteArray[index] = data.content;
      })

      .catch((error) => console.log(error));
  };

  const typewriter = () => {
    if (flag) {
      loadQuote();
      quoteArray[index] += ''; // very important, without this on screen would appear undefined
      flag = false;
    }

    // Outputing each word one by one
    document.querySelector('#quote').innerHTML = `${quoteArray[index].substring(
      0,
      textPosition
    )}<span>\u25AE</span>`;

    if (textPosition++ != quoteArray[index].length) {
      setTimeout(typewriter, 100);
    } else {
      quoteArray[index] = ' ';
      setTimeout(typewriter, 4000);
      textPosition = 0;
      flag = true;
    }
  };

  window.addEventListener('load', typewriter);
});
