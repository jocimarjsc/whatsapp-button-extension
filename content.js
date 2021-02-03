function getData() {
    const contato = document.querySelectorAll(".p15 p");
    const cel = contato[3].innerText.slice(9,20);
    const nome = contato[0].innerText;
    return { 
        contato,
        cel,
        nome
    };
};

function createA(cel, nome){
    const aHref = document.createElement("a");
    aHref.href = `https://wa.me/55${cel}/?text=Olá *${nome}*, tudo bem?`;
    aHref.classList.add("whatsapp");
    aHref.target = "_blank";
    aHref.innerHTML = '<i class="fab fa-whatsapp"></i>';
    return aHref;
};

function startApp() {
    const data = getData();
    const a = createA(data.cel, data.nome);
    
    data.contato[3].appendChild(a);
};

document.addEventListener("load", startApp());