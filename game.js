// Desarrollador: González Avalos César Fernando
// Fecha: 30/Oct/2025
// Lógica del juego

const places = [
    { id: 1, name: "Statue of Liberty", location: "USA", image: "StatueLiberty.jpg" },
    { id: 2, name: "National Mall", location: "Washington D.C.", image: "NationalMall.png" },
    { id: 3, name: "Hollywood Sign", location: "Los Angeles, CA", image: "HollywoodSign.jpg" },
    { id: 4, name: "Golden Gate Bridge", location: "San Francisco, CA", image: "GoldenGate.jpg" },
    { id: 5, name: "Gateway Arch", location: "St. Louis, Missouri", image: "GatewayArch.jpg" },
    { id: 6, name: "Space Needle", location: "Seattle, Washington", image: "SpaceNeedle.jpeg" },
    { id: 7, name: "Cloud Gate", location: "Chicago, Illinois", image: "CloudGate.jpg" },
    { id: 8, name: "Niagara Falls", location: "New York State", image: "NiagaraFalls.jpg" },
    { id: 9, name: "Mount Rushmore", location: "South Dakota", image: "MountRushmore.jpg" },
    { id: 10, name: "Monument Valley", location: "Utah", image: "MonumentValley.jpg" },
    { id: 11, name: "Lake O'Hara", location: "British Columbia, Canada", image: "LakeOHara.jpg" },
    { id: 12, name: "Banff National Park", location: "Canada", image: "BanffNationalPark.jpg" },
    { id: 13, name: "Badlands", location: "Alberta, Canada", image: "Badlands.png" },
    { id: 14, name: "Parliament Hill", location: "Ottawa, Canada", image: "ParliamentHill.jpg" },
    { id: 15, name: "The Cotswolds", location: "UK", image: "Cotswolds.jpg" },
    { id: 16, name: "Harvard", location: "Massachusetts, USA", image: "Harvard.jpeg" },
    { id: 17, name: "Harrods", location: "UK", image: "Harrods.jpeg" },
    { id: 18, name: "Cambridge", location: "USA", image: "Cambridge.jpg" },
    { id: 19, name: "Yale", location: "UK", image: "Yale.jpg" },
    { id: 20, name: "Oxford", location: "UK", image: "Oxford.png" },
    { id: 21, name: "Stone Henge", location: "UK", image: "Stonehenge.jpg" },
    { id: 22, name: "Howard Castle", location: "UK", image: "CastleHoward.jpg" },
    { id: 23, name: "Big Ben", location: "London, UK", image: "BigBen.jpg" },
    { id: 24, name: "Holy Island", location: "UK", image: "HolyIsland.jpg" }
];

let currentIndex = 0;
let isAnimating = false;
let timerInterval = null;
let seconds = 0;
let minutes = 0;

const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const currentSlide = document.getElementById('currentSlide');
const totalSlides = document.getElementById('totalSlides');
const imageNumber = document.getElementById('imageNumber');
const timerDisplay = document.getElementById('timer');
const animationOverlay = document.getElementById('animationOverlay');
const currentImage = document.getElementById('currentImage');

totalSlides.textContent = places.length;

playBtn.addEventListener('click', startGame);
prevBtn.addEventListener('click', previousSlide);
nextBtn.addEventListener('click', nextSlide);
restartBtn.addEventListener('click', restartGame);

document.addEventListener('keydown', (e) => {
    if (gameScreen.style.display === 'none') return;

    if (e.key === 'ArrowLeft') {
        previousSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

async function startGame() {
    await showAnimation();

    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    startTimer();
    updateDisplay();
    showAnimation();
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const mins = String(minutes).padStart(2, '0');
    const secs = String(seconds).padStart(2, '0');
    timerDisplay.textContent = `${mins}:${secs}`;
}

function resetTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    seconds = 0;
    minutes = 0;
    updateTimerDisplay();

    startTimer();
}

function showAnimation() {
    return new Promise((resolve) => {
        animationOverlay.classList.add('active');

        const shuffleCards = document.querySelectorAll('.shuffle-card');
        shuffleCards.forEach((card) => {
            const tx = (Math.random() - 0.5) * 200;
            const ty = (Math.random() - 0.5) * 200;
            const r = (Math.random() - 0.5) * 720;

            card.style.setProperty('--tx', `${tx}px`);
            card.style.setProperty('--ty', `${ty}px`);
            card.style.setProperty('--r', `${r}deg`);
        });

        setTimeout(() => {
            animationOverlay.classList.remove('active');
            resolve();
        }, 2000);
    });
}

async function nextSlide() {
    if (isAnimating) return;

    isAnimating = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    await showAnimation();

    currentIndex = (currentIndex + 1) % places.length;
    updateDisplay();

    resetTimer();

    isAnimating = false;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
}

async function previousSlide() {
    if (isAnimating) return;

    isAnimating = true;
    prevBtn.disabled = true;
    nextBtn.disabled = true;

    await showAnimation();

    currentIndex = (currentIndex - 1 + places.length) % places.length;
    updateDisplay();

    resetTimer();

    isAnimating = false;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
}

function updateDisplay() {
    currentSlide.textContent = currentIndex + 1;
    imageNumber.textContent = currentIndex + 1;

    currentImage.src = `images/${places[currentIndex].image}`;
}

function restartGame() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    seconds = 0;
    minutes = 0;
    updateTimerDisplay();

    gameScreen.style.display = 'none';
    startScreen.style.display = 'flex';

    isAnimating = false;
    prevBtn.disabled = false;
    nextBtn.disabled = false;
}
