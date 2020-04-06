const cards = document.querySelectorAll('.card-category');
cards.forEach((card) => {
card.addEventListener('mouseenter', (event) => {
  event.currentTarget.classList.add("pop");
  });
});

cards.forEach((card) => {
  card.addEventListener('mouseleave', (event) => {
    card.classList.remove('pop');
  });
});


