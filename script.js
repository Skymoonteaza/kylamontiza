const aboutMeLink = document.getElementById('about-me-link');
const hobbiesLink = document.querySelector('a[href="#hobbies"]');
const goalsLink = document.querySelector('a[href="#goals"]');
const galleryLink = document.querySelector('a[href="#gallery"]');
const aboutMePopup = document.getElementById('about-me-popup');
const hobbiesPopup = document.getElementById('hobbies-popup');
const goalsPopup = document.getElementById('goals-popup');
const galleryPopup = document.getElementById('gallery');
const closePopupBtns = document.querySelectorAll('.close-popup');

aboutMeLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    aboutMePopup.style.display = 'flex';
});

hobbiesLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    hobbiesPopup.style.display = 'flex';
});

goalsLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    goalsPopup.style.display = 'flex';
});

galleryLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    const gallerySection = document.getElementById('gallery');
    gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

closePopupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const popup = btn.closest('.popup');
        popup.style.display = 'none';
    });
});

[aboutMePopup, hobbiesPopup, goalsPopup, galleryPopup].forEach(popup => {
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});

document.getElementById('travel-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    alert(`Thank you, ${name}! Your travel request has been successfully submitted.`);
    document.getElementById('travel-form').reset();
});

document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact-popup').style.display = 'flex';
});

document.querySelector('.close-popup').addEventListener('click', function() {
    document.getElementById('contact-popup').style.display = 'none';
});
