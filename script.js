// Fade-up animaties via IntersectionObserver
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => observer.observe(el));

  // Formulier afhandeling
  function handleFormSubmit() {
    const naam = document.getElementById('naam').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!naam || !email) {
      alert('Vul minimaal je naam en e-mailadres in.');
      return;
    }
    const btn = document.querySelector('.btn-submit');
    btn.textContent = 'Verstuurd. We nemen snel contact op.';
    btn.disabled = true;
    btn.style.background = '#2a6e3f';
    btn.style.color = '#fff';
  }