const slides = document.querySelectorAll('.slide');
const titleEl = document.getElementById('portfolio-title');
const descEl = document.getElementById('portfolio-description');

const portfolioData = [
  {
    title: 'Grand Sirenis Riviera Maya',
    description: 'I had the pleasure of shooting this cinematic video for Grand Sirenis Riviera Maya, beautifully capturing the essence of their stunning resort. Featured on their official Instagram, the footage showcases the entire property from breathtaking views and luxurious accommodations to the vibrant restaurants and lively atmosphere. This project highlights the resort’s elegance and the immersive experience it offers to every guest.'
  },
  {
    title: 'Cinematic Shots',
    description: 'Captured stunning cinematic shots during my trip to Mexico, featuring beautiful scenes. This footage was also proudly showcased on Grand Sirenis’s official Instagram and also gained great attention on TikTok. More of these on my tiktok!!'
  },
  {
    title: 'Woof Barrio Recap',
    description: 'Shot a vibrant event recap for Woof at Barrio in Western, capturing the lively atmosphere, music, and energy of the night. The footage highlights the crowd, performances, and unique vibe that made the event unforgettable.'
  },
  {
  title: 'Riseup Basketball',
  description: 'Hired to shoot a mic’d-up feature for the Riseup Basketball League, capturing on-court action, player interactions, and behind-the-scenes moments. The video showcases the energy, competitiveness, and personality of the athletes throughout the game.'
},
  {
  title: 'Surprise Birthday Party',
  description: 'Had the pleasure of working as both photographer and videographer for this unforgettable surprise birthday party, capturing candid reactions, heartfelt moments, and the joyful atmosphere throughout the celebration.'
}
,
  {
  title: 'Woof Annual Prom',
  description: 'Worked as the event photographer for the Woof Annual Prom, capturing elegant portraits, candid interactions, and the lively atmosphere of the night.'
},
{
  title: 'Vow Renewal',
  description: 'Had the opportunity to travel across the country to work as the photographer for a beautiful vow renewal, capturing heartfelt moments, emotional vows, and the love shared between the couple.'
}


];


let currentSlide = 0;

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });

  // Update text content
  titleEl.textContent = portfolioData[currentSlide].title;
  descEl.textContent = portfolioData[currentSlide].description;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Initialize
showSlide(0);
