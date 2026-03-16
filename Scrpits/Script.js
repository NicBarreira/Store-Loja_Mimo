 const produtos = ["👕", "📓", "☕", "🏷️", "📒"];
    let index = 0;
    const icone = document.getElementById("icone");
    const barra = document.getElementById("barra");
    const duracao = 4000;
    const intervalo = duracao / produtos.length;
 
    function trocarIcone() {
      icone.style.animation = "none";
      icone.offsetHeight;
      index = (index + 1) % produtos.length;
      icone.textContent = produtos[index];
      icone.style.animation = "fadeSwap 0.5s ease-in-out";
    }
 
    setInterval(trocarIcone, intervalo);
 
    let progresso = 0;
    const passo = 100 / (duracao / 50);
    const timer = setInterval(() => {
      progresso += passo;
      barra.style.width = progresso + "%";
      if (progresso >= 100) clearInterval(timer);
    }, 50);
 
    setTimeout(() => {
      window.location.href = "store.html";
    }, duracao);