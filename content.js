function getCelular() {
    const contato = document.querySelectorAll(".p15 p");
    const cel = contato[3].innerText.slice(9,20);
    return { 
        contato,
        cel
    }
}

function createA(cel){
    const aHref = document.createElement("a");
    aHref.href = `https://wa.me/55${cel}`;
    aHref.classList.add("whatsapp");
    aHref.target = "_blank"
    return aHref
}

function createImg() {
    const img = document.createElement("img");
    img.src = "https://image.flaticon.com/icons/png/128/3938/3938041.png";
    return img
}

function startApp() {
    const data = getCelular();
    const a = createA(data.cel)
    const img = createImg()
    
    a.appendChild(img)
    data.contato[3].appendChild(a)
}

document.addEventListener("load", startApp())