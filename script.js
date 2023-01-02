function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function writingAnimation() {
    const textNode = document.getElementById('animated-header-text');
    const txt = "Yves Stettler";
    const speed = 100;

    for (let i = 0; i < txt.length; i++) {
        textNode.innerHTML += txt.charAt(i);
        await sleep(speed + Math.floor(Math.random * 40));
    }
}

writingAnimation();