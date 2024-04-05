const aboutblankbutton = document.getElementById("contextMenuOpenButton1");
const panicbutton = document.getElementById("contextMenuOpenButton2");

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    getCursor(event.clientX, event.clientY);
});

function getCursor(clientX, clientY) {
    const contextMenu = document.getElementById("contextMenu");
    
    contextMenu.style.left = clientX + "px";
    contextMenu.style.top = clientY + "px";
    contextMenu.style.display = "inline-block";
};

window.addEventListener("click", function() {
    const contextMenu = document.getElementById("contextMenu");
    contextMenu.style.display = "none";
});

let data = JSON.parse(localStorage.getItem("data"));

aboutblankbutton.addEventListener("click", function() {
    let stylesheet = `
        * {
            margin: 0;
            overflow: hidden;
            border: none;
            outline: none;
        }
    `;
    let newWindow = window.open("", data["about:blank"]["page-name"], data["about:blank"]["page-name"]);
    newWindow.document.title = data["about:blank"]["page-title"];
    let hideoutIframe = newWindow.document.createElement("iframe");
    let hideoutStyle = newWindow.document.createElement("style");
    hideoutStyle.innerText = stylesheet;
    hideoutIframe.src = "../index.html";
    hideoutIframe.style.width = "100%";
    hideoutIframe.style.height = "100%";
    newWindow.document.body.appendChild(hideoutIframe);
    newWindow.document.head.appendChild(hideoutStyle)
    location.replace(data.panic.url);
});

panicbutton.addEventListener("click", function() {
    location.replace(data.panic.url);
});