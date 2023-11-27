
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