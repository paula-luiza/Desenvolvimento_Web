const alvo = "e7d80ffeefa212b7c5c55700e4f7193e";

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
    if(hex_md5(entrada) === alvo){
        mensagem.innerHTML = "<h2>Senha correta.</h2>";
        sessionStorage.setItem('logado', 1) //posso usar qualquer coisa e colocar qualquer valor (?)
        window.location.href = `/page/pagina.html`;
    }
    else {
        mensagem.innerHTML = "<h2>Senha errada!!</h2>"
    }
}