// Intersection observer voor fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Form submit placeholder
  function handleFormSubmit() {
    const naam = document.getElementById('naam').value;
    const email = document.getElementById('email').value;
    if (!naam || !email) {
      alert('Vul minimaal uw naam en e-mailadres in.');
      return;
    }
    // Tijdelijk: stuur naar info@tjimka.nl via mailto
    const org = document.getElementById('org').value;
    const budget = document.getElementById('budget').value;
    const vraag = document.getElementById('vraag').value;
    const subject = encodeURIComponent(`Gespreksaanvraag driepunt0 – ${naam}`);
    const body = encodeURIComponent(`Naam: ${naam}\nOrganisatie: ${org}\nE-mail: ${email}\nTrajectomvang: ${budget}\n\nVraagstuk:\n${vraag}`);
    window.location.href = `mailto:info@tjimka.nl?subject=${subject}&body=${body}`;
  }