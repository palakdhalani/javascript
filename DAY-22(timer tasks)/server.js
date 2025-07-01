const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Remove the old mockData definition

let mockData = {
  recentlyPlayed: [],
  madeForYou: [],
  popularAlbums: []
};

async function fetchData() {
  const res = await fetch('http://localhost:3000/api/data');
  mockData = await res.json();
  renderCards(recentlyPlayedContainer, mockData.recentlyPlayed);
  renderCards(madeForYouContainer, mockData.madeForYou);
  renderCards(popularAlbumsContainer, mockData.popularAlbums);
  loadSong(currentIndex);
}

function init() {
  fetchData();
  audio.addEventListener('loadedmetadata', () => {
    timeEnd.textContent = formatTime(audio.duration || 225);
  });
}

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json(mockData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});