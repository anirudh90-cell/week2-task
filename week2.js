document.getElementById('hamburger').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'flex') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'flex';
    }
});

const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const dropdown = document.getElementById('dropdown');
const header1 = document.querySelector('.header-1');

function checkWindowSize() {
    if (window.innerWidth > 1000) {
        dropdown.classList.remove('open');
        dropdown.style.display = 'none';
        hamburger.style.display = 'none';
        closeBtn.style.display = 'none';
        header1.style.display = 'flex';
    } else {
        hamburger.style.display = 'block';
        header1.style.display = 'none';
    }
}

hamburger.addEventListener('click', function() {
    dropdown.classList.add('open');
    dropdown.style.display = 'flex';
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    dropdown.classList.remove('open');
    dropdown.style.display = 'none';
    hamburger.style.display = 'block';
    closeBtn.style.display = 'none';
});

window.addEventListener('resize', checkWindowSize);
window.addEventListener('load', checkWindowSize);