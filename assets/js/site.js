const bounties = [
  {
    title: "Bounty Group 01",
    price: "$000 PLACEHOLDER",
    description: "Placeholder description for the first grouped bounty. Replace this text with the details you want shown on the board.",
    tags: ["Grouped", "Two Photos", "Editable"],
    images: ["assets/images/side-view.jpg", "assets/images/front-view.jpg"]
  },
  {
    title: "Bounty 02",
    price: "$000 PLACEHOLDER",
    description: "Placeholder description for the second bounty. Change this price, title, tags, and text inside this file.",
    tags: ["Single Photo", "Placeholder", "Editable"],
    images: ["assets/images/vehicle-view.jpg"]
  },
  {
    title: "Bounty 03",
    price: "$000 PLACEHOLDER",
    description: "Placeholder description for the third bounty. Replace this with the description you want on GitHub Pages.",
    tags: ["Single Photo", "Placeholder", "Editable"],
    images: ["assets/images/street-view.jpg"]
  }
];

const board = document.getElementById('board');
board.innerHTML = bounties.map((bounty) => `
  <article class="card">
    <div class="card-header">
      <h2>${bounty.title}</h2>
      <span class="price">${bounty.price}</span>
    </div>
    <div class="gallery ${bounty.images.length > 1 ? 'two' : ''}">
      ${bounty.images.map((src) => `<img src="${src}" alt="${bounty.title} photo" loading="lazy">`).join('')}
    </div>
    <div class="card-body">
      <p>${bounty.description}</p>
      <div class="tags">${bounty.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
    </div>
  </article>
`).join('');

const music = document.getElementById('bg-music');
const button = document.getElementById('music-toggle');
music.volume = 0.45;

async function playMusic() {
  try {
    await music.play();
    button.textContent = 'Pause Music';
  } catch (err) {
    button.textContent = 'Start Music';
  }
}

// Browsers often block audio with sound until the first click/tap, so this tries once and keeps the button as fallback.
playMusic();

button.addEventListener('click', async () => {
  if (music.paused) await playMusic();
  else { music.pause(); button.textContent = 'Start Music'; }
});
