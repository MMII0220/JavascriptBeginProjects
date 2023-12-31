window.addEventListener('load', () => {
  const state = {
    quotes: {
      // quotes object
      '~ Альберт Эйнштейн':
        'Что разум человека может постигнуть и во что он может поверить, того он способен достичь ~Наполеон Хилл, журналист и писатель',
      '~ Великий человек': 'Стремитесь не к успеху, а к ценностям, которые он дает',
      '~ Флоренс Найтингейл':
        'Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.',
      '~ Майкл Джордан':
        'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха.',
      '~ Амелия Эрхарт':
        'Сложнее всего начать действовать, все остальное зависит только от упорства.',
      '~ Марк Твен':
        'Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!',
      '~ Борис Стругацкий': 'Начинать всегда стоит с того, что сеет сомнения.',
    },
    previousQuote: null,
  };
  const btnQuotesShow = document.querySelector('.btn-info');

  btnQuotesShow.addEventListener('click', () => {
    displayRandomQuotes(state);
  });

  const displayRandomQuotes = (state) => {
    const { quotes, previousQuote } = state;
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    // Проверяем, чтобы новая цитата не совпадала с предыдущей
    while (quote === previousQuote) {
      author = authors[Math.floor(Math.random() * authors.length)];
      quote = quotes[author];
    }

    // Обновляем предыдущую цитату
    state.previousQuote = quote;
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
  };
});
