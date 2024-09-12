document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image');
    const textboxes = document.querySelectorAll('.text-box');
    const headerTexts = document.querySelectorAll('.header-text');
    let currentIndex = 0;
    let isAnimating = false;

    function changeContent() {
        if (isAnimating) return;
        isAnimating = true;

        gsap.to(images[currentIndex], { opacity: 0, duration: 1 });
        gsap.to(textboxes[currentIndex], { opacity: 0, duration: 1 });
        gsap.to(headerTexts[currentIndex], { opacity: 0, duration: 1 });

        currentIndex = (currentIndex + 1) % images.length;

        gsap.fromTo(images[currentIndex], 
            { opacity: 0 }, 
            { opacity: 1, duration: 1 }
        );
        gsap.fromTo(textboxes[currentIndex],
            { opacity: 0, x: '100%', y: '100%' },
            {
                opacity: 1,
                x: '0%',
                y: '0%',
                duration: 1,
                onComplete: () => {
                    isAnimating = false;
                }
            }
        );
        gsap.fromTo(headerTexts[currentIndex],
            { opacity: 0 },
            { opacity: 1, duration: 1 }
        );
    }
    images.forEach(img => gsap.set(img, { opacity: 0 }));
    textboxes.forEach(box => gsap.set(box, { opacity: 0 }));
    headerTexts.forEach(header => gsap.set(header, { opacity: 0 }));

    gsap.set(images[currentIndex], { opacity: 1 });
    gsap.set(textboxes[currentIndex], { opacity: 1, x: '0%', y: '0%' });
    gsap.set(headerTexts[currentIndex], { opacity: 1 });
    setInterval(changeContent, 3000);
});

