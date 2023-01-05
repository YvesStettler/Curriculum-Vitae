const animationSpeed = 6000;

const line1 = KUTE.fromTo(
    '#line1-1',
    { path: '#line1-2' },
    { path: '#line1-3' },
    { repeat: 999, duration: animationSpeed, yoyo:true }
);

const line2 = KUTE.fromTo(
    '#line2-1',
    { path: '#line2-2' },
    { path: '#line2-3' },
    { repeat: 999, duration: animationSpeed - 600, yoyo:true }
);

const line3 = KUTE.fromTo(
    '#line3-1',
    { path: '#line3-2' },
    { path: '#line3-3' },
    { repeat: 999, duration: animationSpeed - 100, yoyo:true }
);

const line4 = KUTE.fromTo(
    '#line4-1',
    { path: '#line4-2' },
    { path: '#line4-3' },
    { repeat: 999, duration: animationSpeed - 1000, yoyo:true }
);

const line5 = KUTE.fromTo(
    '#line5-1',
    { path: '#line5-2' },
    { path: '#line5-3' },
    { repeat: 999, duration: animationSpeed - 800, yoyo:true }
);


line1.start();
line2.start();
line3.start();
line4.start();
line5.start();