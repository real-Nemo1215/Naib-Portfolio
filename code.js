// CUSTOM CURSOR
const customCursor = document.querySelector('.custom-cursor');
if (customCursor) {
  document.addEventListener('mousemove', e => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  });

  const interactiveElements = 'a, button, .btn, .skill-card, .project-card, .milestone, .achievement-card';
  document.querySelectorAll(interactiveElements).forEach(el => {
    el.addEventListener('mouseenter', () => {
      customCursor.style.transform = 'translate(-50%, -50%) scale(1.7)';
    });
    el.addEventListener('mouseleave', () => {
      customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
};
