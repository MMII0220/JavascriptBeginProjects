window.addEventListener('load', () => {
  const num1 = document.querySelector('#num1'),
    num2 = document.querySelector('#num2'),
    option1 = document.querySelector('#option1'),
    option2 = document.querySelector('#option2'),
    option3 = document.querySelector('#option3'),
    audio = document.querySelector('#myAudio');

  function multiplyOfNums() {
    return parseInt(num1.textContent) * parseInt(num2.textContent);
  }

  function generateRandomNumber() {
    return Math.round(Math.random() * 12);
  }

  function convertStrToNum(x) {
    return parseInt(x.textContent);
  }

  function setRandomNumber() {
    num1.textContent = generateRandomNumber();
    num2.textContent = generateRandomNumber();
    option1.textContent = multiplyOfNums();
    option2.textContent = generateRandomNumber();
    option3.textContent = generateRandomNumber();

    let allOptions = [],
      switchOptions = [];

    allOptions = [
      convertStrToNum(option1),
      convertStrToNum(option2),
      convertStrToNum(option3),
    ];

    for (i = allOptions.length; i--; ) {
      switchOptions.push(allOptions.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchOptions[0];
    option2.innerHTML = switchOptions[1];
    option3.innerHTML = switchOptions[2];
  }

  function checkAnswers(option) {
    if (multiplyOfNums() == parseInt(option.textContent)) {
      setRandomNumber();
    } else {
      audio.play();
    }
  }

  option1.addEventListener('click', () => checkAnswers(option1));

  option2.addEventListener('click', () => checkAnswers(option2));

  option3.addEventListener('click', () => checkAnswers(option3));

  setRandomNumber();
});
