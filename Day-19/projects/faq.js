console.log('Welcome to Faq');

const faq = document.querySelector('.faq');
faq.addEventListener('click', function (e) {
  if (e.target.classList.contains('question')) {
    e.stopPropagation();
    const currentItem = e.target.parentElement;
    const currentAnswer = currentItem.querySelector('.answer');

    currentAnswer.classList.toggle('show');
  }
});

document.addEventListener('click', function () {
  const allAnswers = document.querySelectorAll('.answer.show');
  allAnswers.forEach((answer) => answer.classList.remove('show'));
});
