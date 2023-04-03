const links = document.querySelectorAll('.nav-link');
var divs = document.querySelectorAll('.content > div');

links.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.dataset.target;
    const targetDiv = document.querySelector(`.content > .${target}`);
    links.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });
    divs.forEach(otherDiv => {
      if (otherDiv !== targetDiv) {
        otherDiv.classList.remove('active');
      }
    });
    link.classList.add('active');
    targetDiv.classList.add('active');
  });
});