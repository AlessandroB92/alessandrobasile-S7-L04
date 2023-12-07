const url = "https://api.pexels.com/v1/search?query=cat"
const url2 = "https://api.pexels.com/v1/search?query=dog"
const token = "441kI0whaLSsKA7rUwPB8lTOlDMzP6dDMbTz5LI5eWfSep7v18EzAy72"
const loadImagesBtn = document.querySelector("#load-images")
const loadSecondaryBtn = document.querySelector("#load-secondary-images")
const cardContainer = document.querySelector("#cardContainer")


const header = {
    method: "GET",
    headers: {
        Authorization: token,
    },
};

async function loadImages(url, header) {
    const response = await fetch(url, header)
    const data = await response.json()  //ottengo oggetto, accedi a photos
    const arrayPic = data.photos        // array di foto
    console.log(data)
    console.log(arrayPic)
    arrayPic.forEach(element => {
        const urlPic = element.src.tiny
        const idPic = element.id
        const templateCard = `<div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="${urlPic}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Lorem Ipsum</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" id="hide-btn" class="btn btn-sm btn-outline-secondary">
              Hide
            </button>
          </div>
          <small class="text-muted">${idPic}</small>
        </div>
      </div>
    </div>
  </div>`
        cardContainer.innerHTML += templateCard
    })
    const hideBtn = document.querySelectorAll("#hide-btn")
    console.log(hideBtn)
    hideBtn.forEach(button => {
        button.addEventListener("click", () => {
            const bookCard = button.closest('.col-md-4')
            bookCard.remove()
        })
    })
}

loadImagesBtn.addEventListener("click", () => {
  cardContainer.innerHTML=''
    loadImages(url, header)
})

loadSecondaryBtn.addEventListener("click", () => {
  cardContainer.innerHTML=''
    loadImages(url2, header)
})
