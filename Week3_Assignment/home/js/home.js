const target = document.querySelectorAll('.anime_target');
console.log(target);
console.log('display_hight', window.innerHeight);
document.addEventListener('scroll', () => {
  for (let i = 0; i < target.length; i++) {
    const distance = target[i].getBoundingClientRect().top + target[i].clientHeight * .5;
    if (window.innerHeight > distance) {
      target[i].classList.add('show')
    }
  }
})