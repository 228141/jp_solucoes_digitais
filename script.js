/* ============================================================
   JP SOLUÇÕES DIGITAIS — JAVASCRIPT
============================================================ */

const WHATSAPP = "5511920133747";


/* ---------- Menu no celular ---------- */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("mainNav");

function setMenu(open) {
    nav.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

menuButton.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });


/* ---------- Fluxograma do topo: sem animação para quem prefere ---------- */

const flow = document.getElementById("heroFlow");

if (flow && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    flow.pauseAnimations();
    flow.setCurrentTime(6);   // mostra o estado final, com o cliente atendido
}


/* ---------- Formulário: abre o WhatsApp com a mensagem pronta ---------- */

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", event => {

    event.preventDefault();

    const nome = form.nome.value.trim();
    const erro = document.getElementById("nome-erro");

    if (nome.length < 2) {
        form.nome.setAttribute("aria-invalid", "true");
        erro.textContent = "Digite seu nome para eu saber com quem estou falando.";
        form.nome.focus();
        return;
    }

    form.nome.setAttribute("aria-invalid", "false");
    erro.textContent = "";

    const linhas = [
        "Olá, Jailton! Vim pelo site da JP Soluções Digitais.",
        "",
        `*Nome:* ${nome}`,
        `*Negócio:* ${form.negocio.value}`,
        `*Preciso de:* ${form.interesse.value}`
    ];

    const mensagem = form.mensagem.value.trim();
    if (mensagem) linhas.push("", mensagem);

    window.open(
        `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(linhas.join("\n"))}`,
        "_blank",
        "noopener"
    );

    status.textContent = "O WhatsApp foi aberto com a sua mensagem. Toque em enviar para concluir.";
});


/* ---------- Ano no rodapé ---------- */

document.getElementById("ano").textContent = new Date().getFullYear();
