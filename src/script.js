const navAnimation = () => {
    const t1 = gsap.timeline({
        defaults:{
            duration:0.5,
        }
    });

    t1.from(".logo",{
        y:-200,
    })

    t1.from(".logo-name",{
        x:-300,
    })
    t1.from(".navbar",{
        y:-200,
    })
}

const homeAnimation = () => {
    const t1 = gsap.timeline({
        defaults:{
            duration:0.5,
        }
    });

    t1.from(".main-heading",{
        x:-1000,
        stagger:0.3,
    })
    t1.from(".main-image",{
        y:-1000,
    })
}

const hamburgerMenu = () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const headerContent = document.querySelector('.header-content');
    const crossMenu = document.querySelector('.cross-menu');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.add('hidden');
        headerContent.classList.remove('hidden');
    })

    crossMenu.addEventListener('click', () => {
        hamburgerMenu.classList.remove('hidden');
        headerContent.classList.add('hidden');
    })
}

navAnimation();
homeAnimation();
hamburgerMenu();