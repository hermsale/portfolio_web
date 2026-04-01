async function cargarCursos() {
  const res = await fetch("./js/cursos.json");
  const data = await res.json();
  const contenedor = document.getElementById("cursos-container");

contenedor.innerHTML = ""; 
  const cursosContainer = document.getElementById("cursos-container");

    data.cursos.forEach(curso => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "col-lg-4");

    card.innerHTML = `
    
      <div class="curso-card p-3 rounded-4 shadow-sm highlight-framework h-100">
        <div class="text-center mb-3">
          <div onclick="abrirModalCursoImg('${curso.certificado_img}', '${curso.tema}')">
            <img 
                src="${curso.certificado_img}" 
                alt="${curso.tema}" 
                class="img-fluid rounded-3 hover-scale curso-img"
                style="cursor: zoom-in;"
      >
        </div>

        <h5 class="fw-bold text-center mt-3">${curso.tema}</h5>
        <p class="text-center text-secondary mb-1"><strong>${curso.lenguaje}</strong> · ${curso.nivel}</p>

        <p class="descripcion-corta text-center mt-2">
          ${curso.descripcion}
        </p>

        <div class="text-center mt-3">
          <a href="${curso.url}" 
             target="_blank" 
             class="btn btn-outline-light px-3 py-1 rounded-pill">
            Ver certificado
          </a>
        </div>
      </div>
    `;

    cursosContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", cargarCursos);