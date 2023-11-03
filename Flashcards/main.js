window.addEventListener('DOMContentLoaded', () => {
  const btnAddFlashCard = document.querySelector('#show_card_box'), // btn to show card whicj add data
    btnDeleteFlashCards = document.querySelector('#delete_cards'), // delete all crads records
    cardToFillWithData = document.querySelector('#create_card'); // card whick store data

  const saveCard = document.querySelector('#save_card'), // btn save data card
    closeCard = document.querySelector('#close_card_box'); // btn close card for saving data

  const questionField = document.querySelector('#question'),
    answerField = document.querySelector('#answer');

  btnAddFlashCard.addEventListener('click', () => {
    cardToFillWithData.style.display = 'block';

    closeCard.addEventListener('click', () => {
      cardToFillWithData.style.display = 'none';
    });
  });

  saveCard.addEventListener('click', () => {
    addFlashCard();
  });

  function addFlashCard() {
    const flashcard = document.createElement('div');
    const question = document.createElement('h2');
    const answer = document.createElement('h2');
    const del = document.createElement('i');

    flashcard.className = 'flashcard';

    question.setAttribute(
      'style',
      'border-top:1px solid red; padding: 15px; margin-top:30px'
    );
    question.textContent = text.my_question;

    answer.setAttribute('style', 'text-align:center; display:none; color:red');
    answer.textContent = text.my_answer;

    del.className = 'fas fa-minus';
    del.addEventListener('click', () => {
      contentArray.splice(delThisIndex, 1);
      localStorage.setItem('items', JSON.stringify(contentArray));
      window.location.reload();
    });

    flashcard.appendChild(question);
    flashcard.appendChild(answer);
    flashcard.appendChild(del);

    flashcard.addEventListener('click', () => {
      if (answer.style.display == 'none') answer.style.display = 'block';
      else answer.style.display = 'none';
    });

    document.querySelector('#flashcards').appendChild(flashcard);
  }
});
