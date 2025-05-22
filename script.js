document.addEventListener('DOMContentLoaded', () => {
  // Select all links with an href starting with '#'
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Prevent the default anchor link behavior
      event.preventDefault();

      const targetId = this.getAttribute('href');

      // Ensure the targetId is not just '#' (which would point to the top of the page)
      // and that it's a valid selector.
      if (targetId.length > 1 && targetId.startsWith('#')) {
        const targetElement = document.getElementById(targetId.substring(1));

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
