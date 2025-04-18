// === Infinity Particle Animation ===
const particle = document.querySelector('.infinity-particle');

let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
let t = 0;

document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

function animateParticle() {
    t += 0.02;

    const radius = 30;
    const a = radius * Math.sin(t);
    const b = radius * Math.sin(t) * Math.cos(t);

    const x = cursorX + a;
    const y = cursorY + b;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
}

// === Matrix Rain Animation ===
const canvas = document.querySelector('.matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '01';
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0'; // green
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// === Animation Loop ===
function animate() {
    animateParticle();
    drawMatrix();
    requestAnimationFrame(animate);
}

animate();

// Resize support
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
