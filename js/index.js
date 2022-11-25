// Toggle Navigation

const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    })
});

// Counters

const counters = document.querySelectorAll('.counter');
const speed = 150;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else{
            count.innerText = target;
        }
    }
    updateCount();
});