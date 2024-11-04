



document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add('show');
          observer.unobserve(entry.target); 

        }
      });
    });
  
    document.querySelectorAll('.as,.third,.slider-background,.customer-card,.team,.imageside,.imgg,.user,.card,.collom,.doubleimage,.leftsecond').forEach(element => {
      observer.observe(element);

    });
  });
  

