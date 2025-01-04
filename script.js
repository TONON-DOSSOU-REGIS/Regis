const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon= document.querySelector('#menu-icon');
const navBar= document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link =>{ 
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section =>{ 
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        
        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

const serviceBtns = document.querySelectorAll('.service-btn');

serviceBtns.forEach((btn, idex) =>{
    btn.addEventListener('click', () =>{
        const resumDetails = document.querySelectorAll('.resume-details');

        serviceBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumDetails.forEach(details => {
            details.classList.remove('active');
        });
        resumDetails[idex].classList.add('active');
    });
});

const arrowRight = document.querySelector('.experience-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.experience-box .navigation .arrow-left');

let index = 0;

const activeExperience = () => {
    const imgSlide = document.querySelector('.experience-carrousel .img-slide');
    const experienceDetails = document.querySelectorAll('.experience-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    experienceDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    experienceDetails[index].classList.add('active');

}

arrowRight.addEventListener('click', () =>{
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activeExperience();
});

arrowLeft.addEventListener('click', () =>{
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activeExperience();
});

