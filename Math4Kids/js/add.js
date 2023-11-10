window.addEventListener('load', () => {
  const num1 = document.querySelector('#num1'),
    num2 = document.querySelector('#num2'),
    option1 = document.querySelector('#option1'),
    option2 = document.querySelector('#option2'),
    option3 = document.querySelector('#option3'),
    audio = document.querySelector('#myAudio');

  function sumOfNums() {
    return parseInt(num1.textContent) + parseInt(num2.textContent);
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
    option1.textContent = sumOfNums();
    option2.textContent = generateRandomNumber();
    option3.textContent = generateRandomNumber();

    const allOptions = [option1, option2, option3].map(convertStrToNum);
    const switchOptions = allOptions.slice();

    for (i = allOptions.length; i--; ) {
      switchOptions.push(allOptions.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    [option1, option2, option3].forEach((option, index) => {
      option.innerHTML = switchOptions[index];
    });
  }

  function checkAnswers(option) {
    if (sumOfNums() == parseInt(option.textContent)) {
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
