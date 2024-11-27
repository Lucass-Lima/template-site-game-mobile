//BOTÕES DO MENU CABEÇALHO
const news = document.getElementById("news");
const comunity = document.getElementById("comunity");
const system = document.getElementById("system");

news.addEventListener("click", function(){

    alert("Redireciona para a página de notícias, onde mostra as atualizações do app e novidades!");
})

comunity.addEventListener("click", function(){

    alert("Redireciona para a página das redes sociais do app e do studio responsável!");
})

system.addEventListener("click", function(){

    alert("Redireciona para a página com mais detalhes dos requisitos dos sistemas dos smartphones!");
})

//BOTÕES DE DOWNLOAD DA GOOGLE PLAY E APP STORE
const google = document.getElementById("btn_googleplay");
const apple = document.getElementById("btn_appstore");

google.addEventListener("click", function(){

    alert("Redireciona para o app na loja da Play Store");
})

apple.addEventListener("click", function(){

    alert("Redireciona para o app na loja da AppStore");
})

//IMAGENS DE DEMONSTRAÇÃO
const imagen1 = document.getElementById("img1");
const imagen2 = document.getElementById("img2");
const imagen3 = document.getElementById("img3");
const imagen4 = document.getElementById("img4");
const video = document.getElementById("video");
const caixa_imagem = document.getElementById("caixa_imagem");
const bigImg = document.getElementById("bigImg");
const caixa_video = document.getElementById("caixa_video")

let image = 0;
let imagens = ["img/imgcuphead1.png", "img/imgcuphead2.png", "img/imgcuphead3.jpg", "img/imgcuphead4.png"]

function ChooseImg(value){

    image = value;
    caixa_imagem.style.display = "flex";
    caixa_video.style.display = "none";
    bigImg.src = imagens[image];
}

imagen1.addEventListener("click", function(){
    
    bigImg.style.opacity = "0";

    setTimeout(function(){

        bigImg.style.opacity = "1";
        ChooseImg(0);

    },500);
})

imagen2.addEventListener("click", function(){

    bigImg.style.opacity = "0";

    setTimeout(function(){

        bigImg.style.opacity = "1";
        ChooseImg(1);

    },500);
})

imagen3.addEventListener("click", function(){

    bigImg.style.opacity = "0";

    setTimeout(function(){

        bigImg.style.opacity = "1";
        ChooseImg(2);

    },500);
})

imagen4.addEventListener("click", function(){

    bigImg.style.opacity = "0";

    setTimeout(function(){

        bigImg.style.opacity = "1";
        ChooseImg(3);

    },500);
})

video.addEventListener("click", function(){

    caixa_imagem.style.display = "none";
    caixa_video.style.display = "flex";
})


//BOTÕES DOS TERMOS E PRIVACIDADE
const terms = document.getElementById("terms");
const privacy = document.getElementById("privacy");

terms.addEventListener("click", function(){

    alert("Redireciona para página de Termos de Uso!");
})

privacy.addEventListener("click", function(){

    alert("Redireciona para página de Política de Privacidade!");
})
