function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function writingAnimation() {
    const textNode = document.getElementById('animated-header-text');
    const txt = "Yves Stettler";
    const speed = 100;

    for (let i = 0; i < txt.length; i++) {
        textNode.innerHTML += txt.charAt(i);
        await sleep(speed + Math.floor(Math.random() * 40));
    }
}

async function textCursorAnimation() {
    const textCursor = document.getElementById('text-cursor');
    const speed = 200;

    while (true) {
        textCursor.style.opacity = Math.abs(textCursor.style.opacity - 1)
        await sleep(speed);
    }
}

async function animationLoop() {
    const textNode = document.getElementById('animated-header-text');
    const speed = 30000;
    const rngFactor = 10000;

    while (true) {
        writingAnimation();
    
        await sleep(speed + Math.floor(Math.random() * rngFactor));
        textNode.innerHTML = "";
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('appearing-content-animation');
            entry.target.classList.remove('appearing-content');
        }
    });
});

textCursorAnimation();
animationLoop();
document.querySelectorAll('.appearing-content').forEach(element => observer.observe(element));
