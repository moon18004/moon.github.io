function fetchJoke () {
      const url = "https://icanhazdadjoke.com";
      fetch(url, {
        method:'GET',
        headers: {'Accept': 'application/json'}
      })
        .then(response => response.json())
        .then(jokes => display(jokes));
  }

function display(jokes){
    let joke = jokes.joke;
    div = document.querySelector("#dad-joke")
    div.innerHTML = joke

}

window.onclick = function(event) {
    fetchJoke()
  }