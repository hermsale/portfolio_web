async function cargarProyectos() {
  const res = await fetch("./js/projects.json");
  const data = await res.json();
  const contenedor = document.getElementById("projects-container");

  contenedor.innerHTML = ""; // limpiar

  data.projects.forEach(p => {
    const carouselId = `carousel-${p.id}`;

    const card = `
    <div class="col-md-4">
      <div class="card h-100 shadow-sm proyecto-card" id="${p.id}">

        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${p.carousel.map((img, i) => `
              <div class="carousel-item ${i === 0 ? "active" : ""}">
                <img src="${img}" class="d-block w-100 card-img-top"
                  data-bs-toggle="modal"
                  data-bs-target="#modalImagen"
                  onclick="abrirCarruselModal('${p.id.replace('proyecto-', '')}', ${i})"
                >
              </div>
            `).join("")}
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>

        <div class="card-body">
          <p class="text-muted small mb-1">${p.type}</p>
          <h5 class="card-title text-center">${p.title}</h5>
          <p class="card-text" descripcion-corta" id="corta-${p.id}">${p.description}</p>

            <p class="card-text descripcion-completa d-none" id="completa-${p.id}">
             ${p.description_full}
            </p>

            <button class="btn btn-link p-0 ver-mas" onclick="toggleDescripcion('${p.id}')">
                Ver más
            </button>

          <div class="tech-badges mb-4 d-flex flex-wrap justify-content-center gap-2">
          ${p.tech.map(t => `<span class="badge ${t.color} px-3 py-2 fs-6">${t.label}</span>`).join('')}
        </div>

          <div class="mt-auto d-flex justify-content-center gap-3">
          <a href="${p.repo}" target="_blank" rel="noopener noreferrer" 
             class="btn btn-outline-primary rounded-pill px-4">
            <i class="fab fa-github me-2"></i>Repo
          </a>
          ${p.link ? `
            <a href="${p.link}" target="_blank" rel="noopener noreferrer" 
               class="btn btn-primary rounded-pill px-4">
              <i class="fas fa-external-link-alt me-2"></i>Demo
            </a>
          ` : ''}
        </div>
        </div>
      </div>
    </div>
    `;

    contenedor.innerHTML += card;
  });
}

document.addEventListener("DOMContentLoaded", cargarProyectos);