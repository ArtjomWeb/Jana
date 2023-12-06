
const allSections = document.querySelectorAll('.section');
console.log(allSections);

const revealSection = function(entries, observer){
  const entry = entries[0];
  console.log(entry)
  if(!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
})

allSections.forEach(function(section) {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
})





///////////////////////////////////////////////////////////
// Make mobile navigation work (burger-menu)
const btnMobile = document.querySelector(".navigation__button");
const nav = document.querySelector(".nav");
const navigationBackground = document.querySelector('.navigation__background');

btnMobile.addEventListener("click", function () { /* при клике на бургер */
    nav.classList.toggle("nav--open"); /* Открываем меню */
    btnMobile.classList.toggle('navigation__button--toggle');   /* кнопка бургер */
    navigationBackground.classList.toggle('navigation__background--toggle');
    // document.body.classList.toggle('lock'); /* отключаем скролл страницы когда открыто меню */
});



///////////////////////////////////////
// Page navigation
document.querySelector('.nav__list').addEventListener('click', function (e) { //навешиваем на ul слушателя
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) { // если мы кликнули на ссылку
    const id = e.target.getAttribute('href'); // узнаем ее данные в атрубте href
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); // находим элемент с этим данным и скролем плавно
  }

  //  Close mobile naviagtion это для того когда открыто бургер меню
  if (nav.classList.contains("nav--open")) // если на наве весит класс nav--active
      nav.classList.remove('nav--open'); // убираем его и закрывается бургер меню
      btnMobile.classList.remove('btn-mobile--active'); /* ибираем к кнопке класс для крестика и крестик становится линиями */
      navigationBackground.classList.remove('navigation__background--toggle');

      // document.body.classList.remove('lock'); /* и включаем снова прокрутку страницы */
});
