const url = "https://api.pexels.com/v1/search?query=cat";

async function loadImages(url) {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer 441kI0whaLSsKA7rUwPB8lTOlDMzP6dDMbTz5LI5eWfSep7v18EzAy72",
      },
    });

    const data = await res.json();
    console.log(data);

    // Sostituisci gli SVG con le immagini dall'API
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      const photoId = data.photos[index].id;
      const cardImage = card.querySelector(".bd-placeholder-img > rect");
      cardImage.setAttribute("fill", `url(${getImageUrl(photoId)})`);

      // Aggiorna il titolo e il testo della carta se necessario
      const cardTitle = card.querySelector(".card-title");
      const cardText = card.querySelector(".card-text");
      cardTitle.textContent = data.photos[index].photographer;
      cardText.textContent = data.photos[index].photographer_url;
    });
  } catch (error) {
    console.error("Errore nel caricamento delle immagini:", error);
  }
}

function getImageUrl(photoId) {
  // Modifica l'URL di base in base alle esigenze dell'API Pexels
  return `https://www.pexels.com/photo/${photoId}`;
}

document.getElementById("loadImagesButton").addEventListener("click", function (event) {
  event.preventDefault();
  loadImages(url);
});