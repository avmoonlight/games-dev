const ACTIVE_CLASS = 'active';
const cards = document.querySelectorAll('.dev-card');

cards[0].classList.add(ACTIVE_CLASS);

function removeActiveClass() {
  const current = document.querySelector(`.${ACTIVE_CLASS}`);
  if (current) current.classList.remove(ACTIVE_CLASS);
}

function activateCard(e) {
  e.stopPropagation();
  removeActiveClass();
  e.currentTarget.classList.add(ACTIVE_CLASS);
}

cards.forEach(card => {
  card.addEventListener('click', activateCard);
});
