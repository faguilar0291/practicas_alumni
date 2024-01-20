probeA = () => {
    window.alert("Hello Kitty");
    let age = window.prompt("Tell me your age");
    console.log(age);
}

probeB = () => {
    let navigator = window.navigator.userAgent;
    console.log("Data about the navigator that I use actually: ", navigator);

    let serverName = window.location.hostname;
    console.log("Direction that the VSC server creates: ", serverName);

    let serverPort = window.location.port;
    console.log("Port of the VSC server: ", serverPort);

    let url = window.location.href;
    console.log("The url of my web page: ",url);
}

probeC = () => {
    let windowInternalHeight = window.innerHeight;
    console.log("This is the window internal height: ", windowInternalHeight);
    
    let windowInternalWidht = window.innerWidth;
    console.log("This is the window internal width: ", windowInternalWidht);

}

probeD = () => {
    let title = window.document.querySelector("h3");
    console.log("El contenido del titulo es: ", title.innerText);
}