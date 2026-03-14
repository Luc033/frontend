export {carregarFragments}

async function carregarFragments() {
  const elementos = document.querySelectorAll("[data-include]");

  for (const el of elementos) {
    const arquivo = el.getAttribute("data-include");

    try {
      const res = await axios.get(`../../fragments/${arquivo}`);
      el.outerHTML = res.data;
    } catch (e) {
      console.error(`Erro ao carregar [${arquivo}]:`, erro.message);
      el.outerHTML = "<p style='color:red'>Erro ao carregar conteúdo.</p>";
    }

    el.removeAttribute('data-include');


  }
}