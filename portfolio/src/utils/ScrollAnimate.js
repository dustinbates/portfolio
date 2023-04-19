const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter')
        animatedScollObserver.unobserve(entry.target)
      }
    })
  }
)


export const scrollAnimate = (el, binding) => {
  if (!binding.value) {
    binding.value = { before: 'before-enter', after: "upon-exit" }
  }
  console.log(binding);
  el.classList.add('before-enter')
  animatedScrollObserver.observe(el)

}