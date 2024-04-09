if (!localStorage.getItem("data")) {
  let data = {
    "about:blank": {
      "page-title": "",
      "page-name": "",
      "page-icon": "",
    },
    panic: {
      url: "https://www.google.com",
    },
    theme: "main",
  };
  localStorage.setItem("data", JSON.stringify(data));
}


let themeData = JSON.parse(localStorage.getItem("data"));

document.querySelector("body").setAttribute("theme", themeData.theme);

let container = document.querySelector(".container");

let navHTML = `
  <nav id="nav">
    <h1 class="logo" id="logo">Hideout <p class="logoVersionText">W.I.P</p></h1>
    <div>
      <input type="text" class="searchBar" id="searchBar"/>
    </div>
    <div class="navbar">
      <div class="toptext">TOP🔥</div>
      <a href="./games.html">Games <i class="fa-solid fa-gamepad"></i></a>
      <a href="">Apps <i class="fa-solid fa-computer"></i></a>
      <a href="">Bookmarklets <i class="fa-solid fa-bookmark"></i></a>
      <a href="">About:blank <i class="fa-solid fa-table-columns"></i></a>
      <a href="">Settings <i class="fa-solid fa-gear"></i></a>
    </div>
  </nav>
`;

if (window.location.pathname === "/games.html") {
  container.insertAdjacentHTML("afterbegin", navHTML);
} else {
  navHTML = `
  <nav id="nav">
    <h1 class="logo" id="logo">Hideout <p class="logoVersionText">W.I.P</p></h1>
    <div class="navbar">
      <div class="toptext">TOP🔥</div>
      <a href="./games.html">Games <i class="fa-solid fa-gamepad"></i></a>
      <a href="">Apps <i class="fa-solid fa-computer"></i></a>
      <a href="">Bookmarklets <i class="fa-solid fa-bookmark"></i></a>
      <a href="">About:blank <i class="fa-solid fa-table-columns"></i></a>
      <a href="">Settings <i class="fa-solid fa-gear"></i></a>
    </div>
  </nav>  
  `;
  container.insertAdjacentHTML("afterbegin", navHTML);
};
