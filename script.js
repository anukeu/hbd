const pages = document.querySelectorAll(".page");
const bgMusic = document.getElementById("bgMusic");
const giftOverlay = document.getElementById("giftOverlay");
let current = 0;

// Function to Open Gift & Start Music
function openGift() {
  // 1. Start Music
  bgMusic.volume = 0.5;
  bgMusic.play();

  // 2. Animate Overlay (Zoom out and fade)
  giftOverlay.classList.add("open-gift");

  // 3. Remove overlay from DOM after animation (optional, but good for cleanup)
  setTimeout(() => {
    giftOverlay.style.display = "none";
  }, 1000);
}

function nextPage() {
  if (current >= pages.length - 1) return;

  pages[current].classList.remove("active");
  current++;
  pages[current].classList.add("active");

  // Stop music on Video Page
  if (current === pages.length - 1) {
    bgMusic.pause();
  }
}

function prevPage() {
  if (current <= 0) return;

  // Resume music if leaving video page
  if (current === pages.length - 1) {
    bgMusic.play();
  }

  pages[current].classList.remove("active");
  current--;
  pages[current].classList.add("active");
}

/* Flip cards logic */
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});