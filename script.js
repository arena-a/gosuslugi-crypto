function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  }
  
  function toggleInfo(infoId) {
    const infoSections = document.querySelectorAll('.info-section');
    infoSections.forEach(section => {
      if (section.id === infoId) {
        section.style.display = section.style.display === 'block' ? 'none' : 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }