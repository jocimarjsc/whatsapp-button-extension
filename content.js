document.addEventListener("load", startApp());

function getData() {
    const contato = document.querySelectorAll(".p15 p");
    const cel = contato[3].innerText.slice(9,20);
    const newName = contato[0].innerText.split(' ', 1);
    const nome = newName.innerText;
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
    aHref.innerHTML = `<i class="fab fa-whatsapp"></i>`;
    return aHref;
};

function createButtonPrint() {
    const id = localStorage.getItem('id');
    const print = document.querySelector('.infos-pedido li a')
    print.innerHTML = '<i class="fas fa-tags"></i>';
    print.href = `https://etiqueta-entrega.vercel.app/etiqueta/${id}`;
    print.title = 'Imprimir Etiqueta'
    print.target = "_blank";
}

function getId() {
    const row = document.querySelectorAll(".order-top");
    const newRow = [... row];

    newRow.map(r => {
        r.addEventListener("click", e => {
            const a = e.path[1].innerText;
            const ab = a.replace(/\s{1,}/g, ' ');
            if(a) {
                localStorage.setItem('id', ab.split(' ', 1))
            }
        })
    });
    
};

async function startApp() {
    await getId()
    createButtonPrint()
    const data = await getData();
    const a = await createA(data.cel, data.nome);
    await data.contato[3].appendChild(a);
};
