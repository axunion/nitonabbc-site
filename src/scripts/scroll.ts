const scrollTargets = document.querySelectorAll("[data-scroll]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target instanceof HTMLElement) {
        const className = entry.target.dataset.scroll;

        if (className) {
          document.body.classList.forEach((cls) => {
            if (cls.indexOf("theme-") === 0) {
              document.body.classList.remove(cls);
            }
          });

          document.body.classList.add(className);
        }
      }
    });
  },
  { rootMargin: "0px 0px -50%" }
);

scrollTargets.forEach((target) => {
  observer.observe(target);
});
