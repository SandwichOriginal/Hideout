document.addEventListener("DOMContentLoaded", function() {

  const gameContainer = document.getElementById("gameContainer");
  const searchBar = document.getElementById("searchBar");
  let games = [];

  fetch("../games.json")
      .then((response) => response.json())
      .then((data) => {
        games = data;
        displayGames(games);
  });

  searchBar.placeholder = `Search`;
  searchBar.addEventListener("keyup", function() {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm)
    );
    displayGames(filteredGames);
  });

  function displayGames(games) {
      gameContainer.innerHTML = "";
      games.forEach((game) => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("gameCard");

        const gameImage = document.createElement("img");
        gameImage.src = `https://gamesdata.vercel.app/Images/${game.image}`;
        gameImage.loading = `lazy`;

        gameImage.addEventListener("click", function() {
            window.location.href = "/play.html?game=" + encodeURIComponent(game.url);
        });
        const gameTitle = document.createElement("h3");
        gameTitle.textContent = game.name;
        gameCard.appendChild(gameImage);
        gameContainer.appendChild(gameCard);
        gameCard.appendChild(gameTitle);
      });
  };
});