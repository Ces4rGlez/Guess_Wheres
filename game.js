// Desarrollador: González Avalos César Fernando
// Fecha: 30/Oct/2025
// Lógica del juego

const allPlaces = [
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
    { id: 24, name: "Holy Island", location: "UK", image: "HolyIsland.jpg" },
    { id: 25, name: "MuseumOfModernArt", location: "Scotland, UK", image: "MuseumOfModernArt.jpg" },
    { id: 26, name: "Space Center", location: "TX", image: "SpaceCenter.jpg" },
    { id: 27, name: "Grand Central Terminal", location: "NY", image: "GrandCentralTerminal.jpg" },
    { id: 28, name: "Ark Encounter", location: "KY", image: "ArkEncounter.jpg" },
    { id: 29, name: "Yellowstone National Park", location: "WY", image: "Yellowstone.jpg"},
    { id: 30, name: "Field Museum", location: "IL", image: "FieldM.jpg" },
    { id: 31, name: "Venice Beach", location: "CA", image: "VeniceBeach.jpg" },
    { id: 32, name: "Brooklyn Bridge", location: "NY", image: "BrooklynBrid.jpg" },
    { id: 33, name: "Grand Teton National Park", location: "WY", image: "GrandTetonNationalPark.jpg"},
    { id: 34, name: "Bryce Canyon National Park", location: "UT", image: "BryceCanyon.jpg"},
    { id: 35, name: "Fisherman's Wharf", location: "CA", image: "Fisherman's.jpg" },
    { id: 36, name: "Universal Studios", location: "FL", image: "UniversalStudios.jpg" },
    { id: 37, name: "Times Square", location: "NY", image: "TimesSquare.jpg" },
    { id: 38, name: "Glacier National Park", location: "MT", image: "GlacierNationalPark.jpg"},
    { id:39, name: "Garden of the Gods", location: "CO", image: "GardenOfGods.jpg"},
    { id: 40, name: "Walt Disney", location: "FL", image: "WaltDisney.jpg"},
    { id: 41, name: "Mall of America", location: "MN", image: "MallOfAmerica.jpg"}
];

let places = allPlaces.slice(); // Default to all places

let currentIndex = 0;
let isAnimating = false;
let timerInterval = null;
let seconds = 0;
let minutes = 0;

const startScreen = document.getElementById('startScreen');
const difficultyScreen = document.getElementById('difficultyScreen');
const gameScreen = document.getElementById('gameScreen');
const playBtn = document.getElementById('playBtn');
const easyBtn = document.getElementById('easyBtn');
const mediumBtn = document.getElementById('mediumBtn');
const hardBtn = document.getElementById('hardBtn');
const backBtn = document.getElementById('backBtn');
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
easyBtn.addEventListener('click', () => selectDifficulty('easy'));
mediumBtn.addEventListener('click', () => selectDifficulty('medium'));
hardBtn.addEventListener('click', () => selectDifficulty('hard'));
backBtn.addEventListener('click', backToStart);
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
    startScreen.style.display = 'none';
    difficultyScreen.style.display = 'flex';
}

function selectDifficulty(difficulty) {
    if (difficulty === 'easy') {
        places = allPlaces.slice(0, 14);
    } else if (difficulty === 'medium') {
        places = allPlaces.slice(14, 28);
    } else if (difficulty === 'hard') {
        places = allPlaces.slice(28, 41);
    }

    totalSlides.textContent = places.length;
    currentIndex = 0;

    proceedToGame();
}

async function proceedToGame() {
    await showAnimation();

    difficultyScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    startTimer();
    updateDisplay();
}

function backToStart() {
    difficultyScreen.style.display = 'none';
    startScreen.style.display = 'flex';
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
