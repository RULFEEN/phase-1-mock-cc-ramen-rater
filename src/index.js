function getAllRamens(){
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => data.forEach(ramen => {
        let img = document.createElement('img')
        img.src = ramen.image
        img.className = 'showcase'
        img.id = `${ramen.id}`
        img.name = `${ramen.name}`
        img.restaurant = `${ramen.restaurant}`
        img.rating = `${ramen.rating}`
        img.comment = `${ramen.comment}`
        document.querySelector('#ramen-menu').appendChild(img)
    }))
}
getAllRamens();

document.querySelector('#ramen-menu').addEventListener('click', (e)=>{
    let display = document.querySelector('#ramen-detail')
    display.innerHTML = `
        <img class="detail_image" src="${e.target.src}" alt="Insert Name Here" />
        <h2 class="name">${e.target.name}</h2>
        <h3 class="restaurant">${e.target.restaurant}</h3>
        `
    document.querySelector('#rating-display').innerHTML = `${e.target.rating}`
    document.querySelector('#comment-display').innerHTML = `${e.target.comment}`
})



const createNew = document.querySelector('#create-new');

createNew.addEventListener('click', (e) => {
    e.preventDefault()
    let form = e.target.parentNode
    let newRamen = {
        name: form.name.value,
        restaurant: form.restaurant.value,
        image: form.image.value,
        rating: form.rating.value,
        comment: form.comment.value
    }
    addNewRamen(newRamen)
    form.reset()
    location.reload()
})

function addNewRamen(newRamen){
    fetch('http://localhost:3000/ramens',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newRamen)
    })
    .then(res => res.json())
    .then(ramen => console.log(ramen))
}





