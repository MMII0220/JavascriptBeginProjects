window.addEventListener('load', function () {
  const quotes = [
    'Что разум человека может постигнуть и во что он может поверить, того он способен достичь ~Наполеон Хилл, журналист и писатель ',
    'Стремитесь не к успеху, а к ценностям, которые он дает ~Альберт Эйнштейн',
    'Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других. ~Флоренс Найтингейл',
    'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. ~Майкл Джордан',
    'Сложнее всего начать действовать, все остальное зависит только от упорства. ~Амелия Эрхарт',
    'Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте! ~Марк Твен',
    'Начинать всегда стоит с того, что сеет сомнения. ~Борис Стругацкий',
  ];
  const btnQuote = document.querySelector('#btnQuote');
  const quotesLen = quotes.length - 1;

  const quoteText = document.querySelector('#quoteText');
  let prevRandomNumber = -1;

  function randomNum() {
    let quotesNum = Math.round(Math.random() * quotesLen);

    if (prevRandomNumber == quotesNum && quotesNum == quotesLen - 1) quotesNum -= 1;
    else if (prevRandomNumber == quotesNum && quotesNum == 0) quotesNum += 1;
    else quotesNum += 1;

    console.log(quotesNum);
    prevRandomNumber = quotesNum;
    return quotesNum;
  }

  btnQuote.addEventListener('click', () => {
    quoteText.innerHTML = quotes[randomNum()];
  });
});
