const jokeHTML = (results) => {
    return `
    <aside>
        <h1>Cuisine Type:${results.cuisines}</h1>
        <h2>${results.name}</h2>
        <h2>${results.phone_numbers}</h2>
        <button id="restaurantSaveButton">Save</button>
    </aside>`

}




let restaurantResults = document.querySelector(".jokeOfTheDay") 
let attachRestaurantResults = (restaurant) => {restaurantResults.innerHTML += restaurantHTML(restaurant)