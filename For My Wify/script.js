const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");

document.getElementById("nextBtn").addEventListener("click", () => {
  slide1.classList.remove("active");
  slide2.classList.add("active");
});

document.getElementById("backBtn").addEventListener("click", () => {
  slide2.classList.remove("active");
  slide1.classList.add("active");
});

// Floating hearts in the background
const heartsContainer = document.querySelector(".hearts");
const symbols = ["❤️", "💖", "💕", "💗"];

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}

setInterval(createHeart, 600);
