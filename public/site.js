// Ysconderijo: three small jobs for the page, shared by the PT, EN and ES files.
// 1. Opening status and today's row in the hours table, always in Lisbon time.
// 2. The phone bar on mobile, shown only while no other booking button is on screen.
// 3. The plate being served: on scroll, it settles and its porcelain opens into the menu.

(function () {
  // Opening hours. If they change, update this object AND the hours table
  // and the structured data in all three HTML files.
  const HORARIO = {
    dias: [1, 2, 3, 4, 5],          // 0 = Sunday ... 6 = Saturday (Monday to Friday)
    abre: 19 * 60,                  // 19:00
    fecha: 23 * 60 + 30,            // 23:30
    abreTxt: "19:00",
    fechaTxt: "23:30"
  };

  const TEXTOS = {
    pt: {
      aberto: f => `Aberto agora, até às ${f}`,
      abreHoje: a => `Abre hoje às ${a}`,
      abreAmanha: a => `Fechado agora. Abre amanhã às ${a}`,
      abreSegunda: a => `Fechado agora. Abre segunda-feira às ${a}`,
      fimDeSemana: a => `Fechado ao fim de semana. Abre segunda-feira às ${a}`,
      hoje: "hoje"
    },
    en: {
      aberto: f => `Open now, until ${f}`,
      abreHoje: a => `Opens today at ${a}`,
      abreAmanha: a => `Closed now. Opens tomorrow at ${a}`,
      abreSegunda: a => `Closed now. Opens Monday at ${a}`,
      fimDeSemana: a => `Closed at weekends. Opens Monday at ${a}`,
      hoje: "today"
    },
    es: {
      aberto: f => `Abierto ahora, hasta las ${f}`,
      abreHoje: a => `Abre hoy a las ${a}`,
      abreAmanha: a => `Cerrado ahora. Abre mañana a las ${a}`,
      abreSegunda: a => `Cerrado ahora. Abre el lunes a las ${a}`,
      fimDeSemana: a => `Cerrado el fin de semana. Abre el lunes a las ${a}`,
      hoje: "hoy"
    }
  };

  const lingua = (document.documentElement.lang || "pt").slice(0, 2);
  const t = TEXTOS[lingua] || TEXTOS.pt;

  function agoraEmLisboa() {
    const partes = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Lisbon", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    }).formatToParts(new Date());
    const valor = tipo => partes.find(p => p.type === tipo).value;
    const dia = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[valor("weekday")];
    return { dia, minutos: Number(valor("hour")) * 60 + Number(valor("minute")) };
  }

  function estadoAtual() {
    const { dia, minutos } = agoraEmLisboa();
    const diaDeServico = HORARIO.dias.includes(dia);
    if (diaDeServico && minutos >= HORARIO.abre && minutos < HORARIO.fecha) {
      return { dia, aberto: true, texto: t.aberto(HORARIO.fechaTxt) };
    }
    if (diaDeServico && minutos < HORARIO.abre) {
      return { dia, aberto: false, texto: t.abreHoje(HORARIO.abreTxt) };
    }
    if (diaDeServico && dia !== 5) {
      return { dia, aberto: false, texto: t.abreAmanha(HORARIO.abreTxt) };
    }
    if (dia === 5) return { dia, aberto: false, texto: t.abreSegunda(HORARIO.abreTxt) };
    return { dia, aberto: false, texto: t.fimDeSemana(HORARIO.abreTxt) };
  }

  try {
    const estado = estadoAtual();
    document.querySelectorAll("[data-estado]").forEach(el => {
      el.classList.toggle("aberto", estado.aberto);
      const texto = el.querySelector(".estado-texto");
      if (texto) texto.textContent = estado.texto;
    });
    const linha = document.querySelector(`.horario tr[data-dia="${estado.dia}"]`);
    if (linha) {
      linha.classList.add("hoje");
      const marca = document.createElement("span");
      marca.className = "hoje-marca";
      marca.textContent = t.hoje;
      linha.querySelector("th").append(marca);
    }
  } catch (e) {
    // Without Intl time zones the static hours text stays as written in the HTML.
  }

  // Phone bar: visible on small screens whenever neither the opening button
  // nor the big number in the booking section is on screen.
  const barra = document.getElementById("barra-ligar");
  const alvos = document.querySelectorAll(".btn-reservar, .tel-grande");
  if (barra && alvos.length && "IntersectionObserver" in window) {
    const visiveis = new Set();
    const obs = new IntersectionObserver(entradas => {
      for (const e of entradas) {
        if (e.isIntersecting) visiveis.add(e.target);
        else visiveis.delete(e.target);
      }
      barra.classList.toggle("visivel", visiveis.size === 0);
    });
    alvos.forEach(a => obs.observe(a));
  }

  // The plate is served. Progress 0..1 across the sticky stage drives two
  // eased values: e1 settles the plate (turn and scale), e2 opens the porcelain.
  const servico = document.querySelector(".servico");
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)");
  const suporta = window.CSS && CSS.supports("clip-path", "circle(1px at 50% 50%)") && CSS.supports("translate", "1px");
  if (servico && suporta && !reduzir.matches) {
    document.documentElement.classList.add("servir");
    const suave = x => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
    let pedido = 0;
    const atualizar = () => {
      pedido = 0;
      const caixa = servico.getBoundingClientRect();
      const curso = caixa.height - window.innerHeight;
      const p = curso > 0 ? Math.min(1, Math.max(0, -caixa.top / curso)) : 0;
      servico.style.setProperty("--e1", suave(p / 0.4).toFixed(4));
      servico.style.setProperty("--e2", suave((p - 0.3) / 0.7).toFixed(4));
    };
    const pedir = () => { if (!pedido) pedido = requestAnimationFrame(atualizar); };
    window.addEventListener("scroll", pedir, { passive: true });
    window.addEventListener("resize", pedir);
    reduzir.addEventListener("change", () => {
      if (reduzir.matches) document.documentElement.classList.remove("servir");
    });
    atualizar();
  }
})();
