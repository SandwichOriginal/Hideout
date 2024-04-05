if (!localStorage.getItem("data")) {
    let data = {
        "about:blank": {
            "page-title": "",
            "page-name": "",
            "page-icon": "",
        },
        "panic": {
            "url": "https://www.google.com",
        },
        "theme": "main",
    };
    localStorage.setItem("data", JSON.stringify(data));
};

let themeData = JSON.parse(localStorage.getItem("data"));

document.querySelector("body").setAttribute("theme", themeData.theme)
