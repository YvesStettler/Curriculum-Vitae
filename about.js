const line1 = KUTE.fromTo(
    '#line1-1',
    { path: '#line1-2' },
    { path: '#line1-1' },
    { repeat: 999, duration: 3000, yoyo:true }
);

const line2 = KUTE.fromTo(
    '#line2-1',
    { path: '#line2-2' },
    { path: '#line2-1' },
    { repeat: 999, duration: 3000, yoyo:true }
);

const line3 = KUTE.fromTo(
    '#line3-1',
    { path: '#line3-2' },
    { path: '#line3-1' },
    { repeat: 999, duration: 3000, yoyo:true }
);

const line4 = KUTE.fromTo(
    '#line4-1',
    { path: '#line4-2' },
    { path: '#line4-1' },
    { repeat: 999, duration: 3000, yoyo:true }
);

const line5 = KUTE.fromTo(
    '#line5-1',
    { path: '#line5-2' },
    { path: '#line5-1' },
    { repeat: 999, duration: 3000, yoyo:true }
);

line1.start();
line2.start();
line3.start();
line4.start();
line5.start();