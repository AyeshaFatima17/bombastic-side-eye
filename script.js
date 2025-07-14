 
    const eyes = document.querySelectorAll('.eye');

    document.addEventListener('mousemove', (e) => {
      eyes.forEach(eye => {
        const ball = eye.querySelector('.eyeball');
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const radius = 20;

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        ball.style.left = `${35 + x}px`;
        ball.style.top = `${35 + y}px`;
      });
    });
