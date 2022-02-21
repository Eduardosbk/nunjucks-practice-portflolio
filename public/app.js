const card = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal_overlay');

card.forEach(card => {
  card.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    const videoId = card.getAttribute('id');
    modalOverlay.querySelector(
      'iframe'
    ).src = `https://www.youtube.com/embed/${videoId}`;
  });
});

document.querySelector('.close_modal').addEventListener('click', () => {
  modalOverlay.style.display = 'none';
  modalOverlay.querySelector('iframe').src = '';
});
