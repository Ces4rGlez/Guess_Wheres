// Desarrollador: González Avalos César Fernando
// Fecha: 30/Oct/2025
// Lógica del juego (con sistema de pistas que solo aparecen al hacer clic)

// ===== DATA =====
const allPlaces = [
  {
    id: 17,
    name: "Ark Encounter",
    location: "KY",
    image: "ArkEncounter.jpg",
  },
  {
    id: 13,
    name: "Big Ben",
    location: "London, UK",
    image: "BigBen.jpg",
  },
  {
    id: 21,
    name: "Brooklyn Bridge",
    location: "NY",
    image: "BrooklynBrid.jpg",
  },
  {
    id: 23,
    name: "Bryce Canyon National Park",
    location: "UT",
    image: "BryceCanyon.jpg",
  },
  {
    id: 12,
    name: "Cambridge",
    location: "USA",
    image: "Cambridge.jpg",
  },
  {
    id: 7,
    name: "Cloud Gate",
    location: "Chicago, Illinois",
    image: "CloudGate.jpg",
  },
  {
    id: 19,
    name: "Field Museum",
    location: "IL",
    image: "FieldM.jpg",
  },
  {
    id: 24,
    name: "Fisherman's Wharf",
    location: "CA",
    image: "Fisherman's.jpg",
  },
  {
    id: 28,
    name: "Garden of the Gods",
    location: "CO",
    image: "GardenOfGods.jpg",
  },
  {
    id: 5,
    name: "Gateway Arch",
    location: "St. Louis, Missouri",
    image: "GatewayArch.jpg",
  },
  {
    id: 27,
    name: "Glacier National Park",
    location: "MT",
    image: "GlacierNationalPark.jpg",
  },
  {
    id: 4,
    name: "Golden Gate Bridge",
    location: "San Francisco, CA",
    image: "GoldenGate.jpg",
  },
  {
    id: 16,
    name: "Grand Central Terminal",
    location: "NY",
    image: "GrandCentralTerminal.jpg",
  },
  {
    id: 22,
    name: "Grand Teton National Park",
    location: "WY",
    image: "GrandTetonNationalPark.jpg",
  },
  {
    id: 11,
    name: "Harvard",
    location: "Massachusetts, USA",
    image: "Harvard.jpeg",
  },
  {
    id: 3,
    name: "Hollywood Sign",
    location: "Los Angeles, CA",
    image: "HollywoodSign.jpg",
  },
  {
    id: 30,
    name: "Mall of America",
    location: "MN",
    image: "MallOfAmerica.jpg",
  },
  {
    id: 10,
    name: "Monument Valley",
    location: "Utah",
    image: "MonumentValley.jpg",
  },
  {
    id: 9,
    name: "Mount Rushmore",
    location: "South Dakota",
    image: "MountRushmore.jpg",
  },
  {
    id: 14,
    name: "MuseumOfModernArt",
    location: "Scotland, UK",
    image: "MuseumOfModernArt.jpg",
  },
  {
    id: 8,
    name: "Niagara Falls",
    location: "New York State",
    image: "NiagaraFalls.jpg",
  },
  {
    id: 15,
    name: "Space Center",
    location: "TX",
    image: "SpaceCenter.jpg",
  },
  {
    id: 6,
    name: "Space Needle",
    location: "Seattle, Washington",
    image: "SpaceNeedle.jpeg",
  },
  {
    id: 1,
    name: "Statue of Liberty",
    location: "USA",
    image: "StatueLiberty.jpg",
  },
  {
    id: 26,
    name: "Times Square",
    location: "NY",
    image: "TimesSquare.jpg",
  },
  {
    id: 25,
    name: "Universal Studios",
    location: "FL",
    image: "UniversalStudios.jpg",
  },
  {
    id: 20,
    name: "Venice Beach",
    location: "CA",
    image: "VeniceBeach.jpg",
  },
  {
    id: 29,
    name: "Walt Disney",
    location: "FL",
    image: "WaltDisney.jpg",
  },
  {
    id: 18,
    name: "Yellowstone National Park",
    location: "WY",
    image: "Yellowstone.jpg",
  },
  {
    id: 31,
    name: "Alcatraz Island",
    location: "CA",
    image: "AlcatrazIsland.jpg",
  },
  {
    id: 32,
    name: "Balboa Park",
    location: "CA",
    image: "BalboaPark.jpg",
  },
  {
    id: 33,
    name: "SeaWorld",
    location: "CA",
    image: "SeaWorld.jpg",
  },
  {
    id: 34,
    name: "The Sphere",
    location: "NV",
    image: "TheSphere .jpg",
  },
  {
    id: 35,
    name: "Walk of Fame",
    location: "CA",
    image: "WalkFam.jpg",
  },
  {
    id: 36,
    name: "White House",
    location: "DC",
    image: "WhiteHouse.jpg",
  },
  {
    id: 37,
    name: "World Trade Center",
    location: "NY",
    image: "WorldTrade.jpg",
  },
];

const hintsByImage = {
  "StatueLiberty.jpg": [
    "Famous statue in New York City, USA.",
    "Green lady holding a torch on an island.",
  ],
  "NationalMall.png": [
    "Long park in Washington, D.C., USA.",
    "Between the Capitol and the Lincoln Memorial.",
  ],
  "HollywoodSign.jpg": [
    "Big white letters in Los Angeles, California.",
    "On a hillside above the city.",
  ],
  "GoldenGate.jpg": [
    "Iconic red bridge in San Francisco, California.",
    "Often seen in fog over the bay.",
  ],
  "GatewayArch.jpg": [
    "Silver arch in St. Louis, Missouri.",
    "Shaped like a giant steel rainbow.",
  ],
  "SpaceNeedle.jpeg": [
    "Tall tower in Seattle, Washington.",
    "UFO-shaped top with city views.",
  ],
  "CloudGate.jpg": [
    "Shiny sculpture in Chicago, Illinois.",
    "Mirror “bean” in Millennium Park.",
  ],
  "NiagaraFalls.jpg": [
    "Huge waterfalls in New York State, USA.",
    "Boats go close to the falls.",
  ],
  "MountRushmore.jpg": [
    "Carved faces in South Dakota, USA.",
    "Four presidents on a granite cliff.",
  ],
  "MonumentValley.jpg": [
    "Red rock mesas in Utah, USA.",
    "Classic Western movie scenery.",
  ],
  "Harvard.jpeg": [
    "Historic university in Massachusetts, USA.",
    "Red-brick yard and ivy look.",
  ],
  "Cambridge.jpg": [
    "City next to Boston, Massachusetts, USA.",
    "Home to Harvard and MIT.",
  ],
  "BigBen.jpg": [
    "Its bell weighs more than 13 tons.",
    "One of the most iconic symbols of London."
  ],
  "MuseumOfModernArt.jpg": [
    "Located in Glasgow, Scotland.",
    "Exhibits contemporary and modern art."
  ],
  "SpaceCenter.jpg": [
    "Learn about NASA and space exploration here.",
    "Located in Houston, Texas."
  ],
  "GrandCentralTerminal.jpg": [
    "A train station with a huge clock in the main hall.",
    "One of New York City's most famous landmarks."
  ],
  "ArkEncounter.jpg": [
    "A life-sized replica of a biblical ship.",
    "Located in Kentucky."
  ],
  "Yellowstone.jpg": [
    "Famous for the Old Faithful geyser.",
    "The first national park in the world."
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
    "Connects Manhattan to another New York borough.",
    "Opened in 1883."
  ],
  "GrandTetonNationalPark.jpg": [
    "Famous for its sharp mountain peaks and clear lakes.",
    "Located near Yellowstone in Wyoming."
  ],
  "BryceCanyon.jpg": [
    "Known for its rock formations called 'hoodoos'.",
    "Located in southern Utah."
  ],
  "Fisherman's.jpg": [
    "Famous pier with sea lions and souvenir shops.",
    "One of San Francisco’s most visited places."
  ],
  "UniversalStudios.jpg": [
    "Theme park dedicated to movies and TV shows.",
    "Located in Orlando, Florida."
  ],
  "TimesSquare.jpg": [
    "Known for its giant electronic billboards.",
    "Famous New Year’s Eve celebration spot."
  ],
  "GlacierNationalPark.jpg": [
    "Located in Montana, full of mountains and glacial lakes.",
    "Part of the U.S.-Canada border region."
  ],
  "GardenOfGods.jpg": [
    "Park with stunning red rock formations.",
    "Located in Colorado Springs."
  ],
  "WaltDisney.jpg": [
    "The most magical place on Earth.",
    "Famous for its castle and Disney characters."
  ],
  "MallOfAmerica.jpg": [
    "One of the largest shopping malls in the world.",
    "Located in Minnesota, with an indoor theme park."
  ],
  "AlcatrazIsland.jpg": [
    "Former federal prison on an island in San Francisco Bay.",
    "Known for its history of housing notorious criminals."
  ],
  "BalboaPark.jpg": [
    "Cultural park in San Diego, California.",
    "Home to museums, gardens, and the San Diego Zoo."
  ],
  "SeaWorld.jpg": [
    "Marine mammal park and oceanarium.",
    "Features shows with dolphins, whales, and seals."
  ],
  "TheSphere .jpg": [
    "Massive spherical structure in Las Vegas.",
    "Located at the Venetian Resort, used for entertainment."
  ],
  "WalkFam.jpg": [
    "Famous sidewalk in Hollywood with celebrity names.",
    "Stars embedded in the ground for famous people."
  ],
  "WhiteHouse.jpg": [
    "Official residence of the President of the United States.",
    "Located in Washington, D.C."
  ],
  "WorldTrade.jpg": [
    "Iconic skyscrapers in New York City.",
    "Rebuilt after the 9/11 attacks."
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

hintToggleBtn?.addEventListener("click", () => {
  const isOpen = !hintsPanel.hasAttribute("hidden");
  if (isOpen) {
    hintsPanel.setAttribute("hidden", "");
    hintToggleBtn.setAttribute("aria-expanded", "false");
  } else {
    renderHintsForCurrent();
    hintsPanel.removeAttribute("hidden");
    hintToggleBtn.setAttribute("aria-expanded", "true");
  }
});

// ===== FLUJO =====
async function startGame() {
  startScreen.style.display = "none";
  difficultyScreen.style.display = "flex";
}

function selectDifficulty(difficulty) {
  if (difficulty === "easy") places = allPlaces.slice(0, 14);
  else if (difficulty === "medium") places = allPlaces.slice(14, 28);
  else if (difficulty === "hard") places = allPlaces.slice(28, 37);

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
