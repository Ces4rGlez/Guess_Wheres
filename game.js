// Desarrollador: González Avalos César Fernando
// Fecha: 30/Oct/2025
// Lógica del juego (con sistema de pistas que solo aparecen al hacer clic)

// ===== DATA =====
const allPlaces = [
  // ====== FÁCIL (1–15) ======
  { id: 1, name: "Statue of Liberty", location: "USA", image: "StatueLiberty.jpg" },
  { id: 2, name: "Golden Gate Bridge", location: "San Francisco, CA", image: "GoldenGate.jpg" },
  { id: 3, name: "Hollywood Sign", location: "Los Angeles, CA", image: "HollywoodSign.jpg" },
  { id: 4, name: "Times Square", location: "NY", image: "TimesSquare.jpg" },
  { id: 5, name: "Mount Rushmore", location: "South Dakota", image: "MountRushmore.jpg" },
  { id: 6, name: "Niagara Falls", location: "New York State", image: "NiagaraFalls.jpg" },
  { id: 7, name: "Big Ben", location: "London, UK", image: "BigBen.jpg" },

  { id: 9, name: "Gateway Arch", location: "St. Louis, Missouri", image: "GatewayArch.jpg" },
  { id: 10, name: "Walt Disney", location: "FL", image: "WaltDisney.jpg" },
  { id: 11, name: "Universal Studios", location: "FL", image: "UniversalStudios.jpg" },
  { id: 12, name: "White House", location: "Washington, D.C.", image: "WhiteHouse.jpg" },
  { id: 13, name: "The Strip", location: "Las Vegas, NV", image: "TheStrip.jpg" },
  { id: 14, name: "Brooklyn Bridge", location: "NY", image: "BrooklynBrid.jpg" },
  { id: 15, name: "Space Needle", location: "Seattle, Washington", image: "SpaceNeedle.jpeg" },

  // ====== INTERMEDIO (16–29) ======
  { id: 16, name: "Yellowstone National Park", location: "WY", image: "Yellowstone.jpg" },
  { id: 17, name: "Monument Valley", location: "Utah", image: "MonumentValley.jpg" },
  { id: 18, name: "Grand Central Terminal", location: "NY", image: "GrandCentralTerminal.jpg" },
  { id: 19, name: "SeaWorld", location: "San Diego, CA", image: "SeaWorld.jpg" },
  { id: 20, name: "Cloud Gate", location: "Chicago, Illinois", image: "CloudGate.jpg" },
  { id: 21, name: "Fisherman's Wharf", location: "CA", image: "Fisherman's.jpg" },
  { id: 22, name: "Space Center", location: "TX", image: "SpaceCenter.jpg" },
  { id: 23, name: "Garden of the Gods", location: "CO", image: "GardenOfGods.jpg" },
  { id: 25, name: "The Sphere", location: "Las Vegas, NV", image: "TheSphere.jpg" },
  { id: 26, name: "Balboa Park", location: "San Diego, CA", image: "BalboaPark.jpg" },
  { id: 27, name: "Mall of America", location: "MN", image: "MallOfAmerica.jpg" },
  { id: 28, name: "Harvard", location: "Massachusetts, USA", image: "Harvard.jpeg" },
  { id: 29, name: "World Trade Center", location: "New York, NY", image: "WorldTradeCenter.jpg" },

  // ====== DIFÍCIL (30–44) ======
  { id: 30, name: "Walk of Fame", location: "Los Angeles, CA", image: "WalkOfFame.jpg" },
  { id: 31, name: "Bryce Canyon National Park", location: "UT", image: "BryceCanyon.jpg" },
  { id: 32, name: "Grand Teton National Park", location: "WY", image: "GrandTetonNationalPark.jpg" },
  { id: 33, name: "Ark Encounter", location: "KY", image: "ArkEncounter.jpg" },

  { id: 37, name: "Field Museum", location: "IL", image: "FieldM.jpg" },
  { id: 38, name: "Cambridge", location: "USA", image: "Cambridge.jpg" },
  { id: 41, name: "MuseumOfModernArt", location: "Scotland, UK", image: "MuseumOfModernArt.jpg" },
  { id: 42, name: "Alcatraz Island", location: "San Francisco, CA", image: "AlcatrazIsland.jpg" },
  { id: 43, name: "Denver Botanic Gardens", location: "Denver, CO", image: "DenverBotanicGardens.jpg" },
  { id: 44, name: "National Mall", location: "Washington D.C.", image: "NationalMall.png" }
];



const hintsByImage = {
  "StatueLiberty.jpg": [
    "Famous statue in New York City, USA.",
    "In Spanish: Estatua de la Libertad."
  ],
  "NationalMall.png": [
    "Long park in Washington, D.C., USA.",
    "Between the Capitol and the Lincoln Memorial."
  ],
  "HollywoodSign.jpg": [
    "Big white letters in Los Angeles, California.",
    "On a hillside above the city."
  ],
  "GoldenGate.jpg": [
    "Iconic red bridge in San Francisco, California.",
    "Its name means 'Puerta Dorada' in Spanish."
  ],
  "GatewayArch.jpg": [
    "Silver arch in St. Louis, Missouri.",
    "Shaped like a giant steel rainbow."
  ],
  "SpaceNeedle.jpeg": [
    "Tall tower in Seattle, Washington.",
    "Looks like a UFO on top of a tower."
  ],
  "CloudGate.jpg": [
    "Shiny sculpture in Chicago, Illinois.",
    "Also called 'The Bean'."
  ],
  "NiagaraFalls.jpg": [
    "Huge waterfalls between USA and Canada.",
    "In Spanish: Cataratas del Niágara."
  ],
  "MountRushmore.jpg": [
    "Carved faces in South Dakota, USA.",
    "Four presidents on a granite cliff."
  ],
  "MonumentValley.jpg": [
    "Red rock mesas in Utah, USA.",
    "Its name means 'Valle de los Monumentos'."
  ],
  "Badlands.png": [
    "Eroded hills in Alberta, Canada.",
    "Its name means 'Tierras Malas' in Spanish."
  ],
 
  "Harvard.jpeg": [
    "Historic university in Massachusetts, USA.",
    "One of the most famous universities in the world."
  ],
  "Harrods.jpeg": [
    "Luxury store in London, UK.",
    "Very popular for shopping in England."
  ],
  "GlacierNationalPark.jpg": [
    "National park with glaciers and lakes.",
    "Located in Montana, USA."
  ],
  "Cambridge.jpg": [
    "City next to Boston, Massachusetts, USA.",
    "Home to Harvard and MIT universities."
  ],
  
  "Stonehenge.jpg": [
    "Ancient stones in England, UK.",
    "A circle of huge standing rocks."
  ],

  "BigBen.jpg": [
    "Famous clock tower in London.",
    "Its bell weighs more than 13 tons."
  ],
  "HolyIsland.jpg": [
    "Also known as Lindisfarne.",
    "In Spanish: Isla Sagrada."
  ],
  "SpaceCenter.jpg": [
    "Learn about NASA and space exploration.",
    "Located in Houston, Texas."
  ],
  "GrandCentralTerminal.jpg": [
    "A train station with a huge clock in the main hall.",
    "Located in New York City."
  ],
  "ArkEncounter.jpg": [
    "A life-sized replica of Noah’s Ark.",
    "Located in Kentucky, USA."
  ],
  "Yellowstone.jpg": [
    "Famous for the Old Faithful geyser.",
    "Its name means 'Piedra Amarilla'."
  ],
  "FieldM.jpg": [
    "A natural history museum in Chicago.",
    "Home to the famous T. rex skeleton named Sue."
  ],
  "VeniceBeach.jpg": [
    "Known for its boardwalk and street performers.",
    "Located in Los Angeles, California."
  ],
  "BrooklynBrid.jpg": [
    "Connects Manhattan to Brooklyn, New York.",
    "Opened in 1883."
  ],
  "BryceCanyon.jpg": [
    "Known for its rock formations called 'hoodoos'.",
    "Located in southern Utah."
  ],
  "Fisherman's.jpg": [
    "Famous pier with sea lions and souvenir shops.",
    "Its name means 'Muelle del Pescador'."
  ],
  "UniversalStudios.jpg": [
    "Theme park dedicated to movies and TV shows.",
    "Located in Orlando, Florida."
  ],
  "TimesSquare.jpg": [
    "Known for its giant electronic billboards.",
    "Famous New Year’s Eve celebration spot."
  ],
  "GardenOfGods.jpg": [
    "Park with stunning red rock formations.",
    "Its name means 'Jardín de los Dioses'."
  ],
  "WaltDisney.jpg": [
    "The most magical place on Earth.",
    "Famous for its castle and Disney characters."
  ],
  "MallOfAmerica.jpg": [
    "One of the largest shopping malls in the world.",
    "Located in Minnesota, USA."
  ],
  "AlcatrazIsland.jpg": [
    "Former prison located on an island in San Francisco Bay.",
    "Famous for being nearly impossible to escape."
  ],
  "BalboaPark.jpg": [
    "Large urban park in San Diego, California.",
    "Home to museums, gardens, and the San Diego Zoo."
  ],
  "DenverBotanicGardens.jpg": [
    "Beautiful gardens in Denver, Colorado.",
    "Features plants from all around the world."
  ],
  "SeaWorld.jpg": [
    "Marine theme park with dolphins and orcas.",
    "Located in San Diego, California."
  ],
  "TheSphere.jpg": [
    "Gigantic LED entertainment dome in Las Vegas.",
    "Known for its stunning 360° visuals."
  ],
  "TheStrip.jpg": [
    "Famous avenue full of casinos and hotels.",
    "The main attraction in Las Vegas, Nevada."
  ],
  "WalkOfFame.jpg": [
    "Stars on the sidewalk honoring celebrities.",
    "Located on Hollywood Boulevard, Los Angeles."
  ],
  "WhiteHouse.jpg": [ 
    "Official residence of the President of the United States.",
    "Located at 1600 Pennsylvania Avenue, Washington D.C."
  ],
  "WorldTradeCenter.jpg": [
    "Modern complex rebuilt after 9/11.",
    "Home to One World Observatory in New York City."
  ],
  "GrandTetonNationalPark.jpg": [
    "National park in Wyoming with stunning mountain views.",
    "Features the Teton Range and Jackson Lake."
  ],
  "MuseumOfModernArt.jpg": [
    "Famous art museum in New York City.",
    "Known for its modern and contemporary art collections."
  ]
};


// ===== STATE =====
let places = allPlaces.slice();
let currentIndex = 0;
let isAnimating = false;
let timerInterval = null;
let seconds = 0;
let minutes = 0;

// ===== DOM =====
const startScreen = document.getElementById("startScreen");
const difficultyScreen = document.getElementById("difficultyScreen");
const gameScreen = document.getElementById("gameScreen");

const playBtn = document.getElementById("playBtn");
const easyBtn = document.getElementById("easyBtn");
const mediumBtn = document.getElementById("mediumBtn");
const hardBtn = document.getElementById("hardBtn");
const backBtn = document.getElementById("backBtn");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const currentSlide = document.getElementById("currentSlide");
const totalSlides = document.getElementById("totalSlides");
const imageNumber = document.getElementById("imageNumber");
const timerDisplay = document.getElementById("timer");
const animationOverlay = document.getElementById("animationOverlay");
const currentImage = document.getElementById("currentImage");

const hintToggleBtn = document.getElementById("hintToggleBtn");
const hintsPanel = document.getElementById("hintsPanel");
const hint1Text = document.getElementById("hint1Text");
const hint2Text = document.getElementById("hint2Text");

totalSlides.textContent = places.length;

// ===== EVENTOS =====
playBtn.addEventListener("click", startGame);
easyBtn.addEventListener("click", () => selectDifficulty("easy"));
mediumBtn.addEventListener("click", () => selectDifficulty("medium"));
hardBtn.addEventListener("click", () => selectDifficulty("hard"));
backBtn.addEventListener("click", backToStart);

prevBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);
restartBtn.addEventListener("click", restartGame);

document.addEventListener("keydown", (e) => {
  if (gameScreen.style.display === "none") return;
  if (e.key === "ArrowLeft") previousSlide();
  else if (e.key === "ArrowRight") nextSlide();
  else if (e.key.toLowerCase() === "h") hintToggleBtn?.click();
});

let hintStep = 0; // controla cuántas pistas se han mostrado

hintToggleBtn?.addEventListener("click", () => {
  const imgFile = places[currentIndex]?.image;
  const hints = hintsByImage[imgFile] || [];
  
  // Si el panel está oculto, se muestra y se reinicia el contador de pistas
  if (hintsPanel.hasAttribute("hidden")) {
    hintsPanel.removeAttribute("hidden");
    hintToggleBtn.setAttribute("aria-expanded", "true");
    hintStep = 0; // reinicia el contador
    hint1Text.textContent = "";
    hint2Text.textContent = "";
  }

  // Mostrar la siguiente pista según el contador
  if (hintStep === 0 && hints.length > 0) {
    hint1Text.textContent = hints[0];
    hintStep++;
  } else if (hintStep === 1 && hints.length > 1) {
    hint2Text.textContent = hints[1];
    hintStep++;
  } else {
    // Si ya mostró todas las pistas, oculta el panel
    hintsPanel.setAttribute("hidden", "");
    hintToggleBtn.setAttribute("aria-expanded", "false");
    hintStep = 0; // reinicia
  }
});


// ===== FLUJO =====
async function startGame() {
  startScreen.style.display = "none";
  difficultyScreen.style.display = "flex";
}

function selectDifficulty(difficulty) {
  if (difficulty === "easy") places = allPlaces.slice(0, 15);
  else if (difficulty === "medium") places = allPlaces.slice(15, 29);
  else if (difficulty === "hard") places = allPlaces.slice(29, 44);

  totalSlides.textContent = places.length;
  currentIndex = 0;
  proceedToGame();
}

async function proceedToGame() {
  await showAnimation();
  difficultyScreen.style.display = "none";
  gameScreen.style.display = "block";
  hintsPanel.setAttribute("hidden", "");
  hintToggleBtn.setAttribute("aria-expanded", "false");
  startTimer();
  updateDisplay();
}

function backToStart() {
  difficultyScreen.style.display = "none";
  startScreen.style.display = "flex";
}

// ===== TIMER =====
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
  const mins = String(minutes).padStart(2, "0");
  const secs = String(seconds).padStart(2, "0");
  timerDisplay.textContent = `${mins}:${secs}`;
}
function resetTimer() {
  if (timerInterval) clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  updateTimerDisplay();
  startTimer();
}

// ===== ANIMACIÓN =====
function showAnimation() {
  return new Promise((resolve) => {
    animationOverlay.classList.add("active");
    const shuffleCards = document.querySelectorAll(".shuffle-card");
    shuffleCards.forEach((card) => {
      const tx = (Math.random() - 0.5) * 200;
      const ty = (Math.random() - 0.5) * 200;
      const r = (Math.random() - 0.5) * 720;
      card.style.setProperty("--tx", `${tx}px`);
      card.style.setProperty("--ty", `${ty}px`);
      card.style.setProperty("--r", `${r}deg`);
    });
    setTimeout(() => {
      animationOverlay.classList.remove("active");
      resolve();
    }, 2000);
  });
}

// ===== NAVEGACIÓN =====
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

// ===== RENDER =====
function updateDisplay() {
  currentSlide.textContent = currentIndex + 1;
  imageNumber.textContent = currentIndex + 1;
  currentImage.src = `images/${places[currentIndex].image}`;

  if (!hintsPanel.hasAttribute("hidden")) {
    hintsPanel.setAttribute("hidden", "");
    hintToggleBtn.setAttribute("aria-expanded", "false");
  }
  renderHintsForCurrent();
}

function renderHintsForCurrent() {
  const imgFile = places[currentIndex]?.image;
  const hints = hintsByImage[imgFile];
  if (Array.isArray(hints) && hints.length >= 2) {
    hint1Text.textContent = hints[0];
    hint2Text.textContent = hints[1];
  } else if (Array.isArray(hints) && hints.length === 1) {
    hint1Text.textContent = hints[0];
    hint2Text.textContent = "Próximamente…";
  } else {
    hint1Text.textContent = "Sin pistas aún para esta imagen.";
    hint2Text.textContent = "Próximamente…";
  }
}

// ===== REINICIO =====
function restartGame() {
  if (timerInterval) clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  updateTimerDisplay();

  hintsPanel.setAttribute("hidden", "");
  hintToggleBtn.setAttribute("aria-expanded", "false");

  gameScreen.style.display = "none";
  startScreen.style.display = "flex";

  isAnimating = false;
  prevBtn.disabled = false;
  nextBtn.disabled = false;

  places = allPlaces.slice();
  totalSlides.textContent = places.length;
  currentIndex = 0;
}
