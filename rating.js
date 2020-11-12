var recipes = document.querySelectorAll(".rating");
var stars = document.querySelectorAll(".star");
stars.forEach(function(element, index){
    element.addEventListener("click", saveStar);
});

function saveStar(event) {
    var id = this.dataset.stars;
    
    var recipe = this.parentElement.id;

    localStorage.setItem(recipe+'rating', id);
  // Refresh our rating on screen
  loadData();
}

function loadData() {
    recipes.forEach(function(element,index){
        var prefix = element.id;
    // Get stored rating on load
    var rating = localStorage.getItem(prefix+'rating');
    var s = parseInt(rating);


    // Get all of our stars..
  var stars = element.querySelectorAll(".star");

  // Loop through, and based on rating int, apply style
  stars.forEach(function(element, index){
    if (index >= s){
        element.classList.remove("active");
    }else{
        element.classList.add("active")
    }
  })
    }) 
}
loadData();