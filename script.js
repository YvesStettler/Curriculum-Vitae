function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function writingAnimation(nameTextNode, funcTextNode, txtCursor) {
    const name = "Yves Stettler";
    const func = "Technicien en informatique";
    const speed = 100;

    for (let i = 0; i < name.length; i++) {
        nameTextNode.innerHTML += name.charAt(i);
        await sleep(speed + Math.floor(Math.random() * 40));
    }

    txtCursor.classList.add('cursor-text-smaller');

    for (let i = 0; i < func.length; i++) {
        funcTextNode.innerHTML += func.charAt(i);
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
    const nameTextNode = document.getElementById('animated-name');
    const funcTextNode = document.getElementById('animated-function');
    const cursor = document.getElementById('text-cursor');
    const speed = 30000;
    const rngFactor = 10000;

    while (true) {
        writingAnimation(nameTextNode, funcTextNode, cursor);
    
        await sleep(speed + Math.floor(Math.random() * rngFactor));
        nameTextNode.innerHTML = "";
        funcTextNode.innerHTML = "";
        cursor.classList.remove('cursor-text-smaller');
    }
}

function detailsEvent(item) {
    item.addEventListener('click', () => item.classList.toggle('item-is-focused'));
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
document
    .querySelector('#knowledge')
    .querySelectorAll('li')
    .forEach(element => detailsEvent(element));