const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

  function handleSubmit() {
    const naam = document.getElementById('naam').value;
    const email = document.getElementById('email').value;
    if (!naam || !email) { alert('Vul minimaal je naam en e-mailadres in.'); return; }
    const org = document.getElementById('org').value;
    const fase = document.getElementById('fase').value;
    const vraag = document.getElementById('vraag').value;
    const subject = encodeURIComponent(`Kennismaking Driepunt0 – ${naam}`);
    const body = encodeURIComponent(`Naam: ${naam}\nOrganisatie: ${org}\nE-mail: ${email}\nFase: ${fase}\n\nVraagstuk:\n${vraag}`);
    window.location.href=`mailto:info@tjimka.nl?subject=${subject}&body=${body}`;
  }