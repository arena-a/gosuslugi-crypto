function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

function toggleInfo(infoId) {
  const infoSections = document.querySelectorAll('.info-section');
  infoSections.forEach(section => {
    if (section.id === infoId) {
      if (section.classList.contains('visible')) {
        section.classList.remove('visible');
      } else {
        section.classList.add('visible');
      }
    } else {
      section.classList.remove('visible');
    }
  });
}