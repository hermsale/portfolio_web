let imagenesProyectos = {};

async function cargarImagenesProyectos() {
  try {
    const response = await fetch("./js/imagenesProyectos.json");
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    imagenesProyectos = await response.json();
  } catch (error) {
    console.error("Error al cargar las imágenes de los proyectos:", error);
  }
}

document.addEventListener("DOMContentLoaded", cargarImagenesProyectos);

  function abrirCarruselModal(proyecto,indice) {
    let inner = document.getElementById("carouselModalInner");
    inner.innerHTML = "";
    imagenesProyectos[proyecto].forEach((src, i) => {
      inner.innerHTML += `
        <div class="carousel-item carousel-modal ${i === indice ? "active" : ""}">
          <img src="${src}" class="d-block w-100  img-fluid">
        </div>
        `
        ;
    });

    let modal = new bootstrap.Modal(document.getElementById("modalImagen"));
    modal.show();
  }

  document.addEventListener("DOMContentLoaded", cargarProyectos);
let proyectosData = {};
async function cargarProyectos() {
  try {
    const response = await fetch("./js/projects.json");
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    proyectosData = await response.json();
  } catch (error) {
    console.error("Error al cargar los proyectos:", error);
    return [];
  }
}

// Función para destacar un proyecto cuando se hace clic en la skill correspondiente
  function filtrarProyectos(skill) {
    console.log("Filtrando proyectos por skill:", skill);
    console.log("Proyectos disponibles:", proyectosData.projects);
  // Quitamos el glow previo
  document.querySelectorAll(".proyecto-card").forEach(card => {
    card.classList.remove("destacado-skill");
  });

  // Iteramos proyectos cargados desde projects.json
  proyectosData.projects.forEach(p => {
    
    if (p.skills && p.skills.includes(skill)) {
      const card = document.getElementById(p.id);
      if (card) {
         card.classList.add("destacado-skill");
        //  card.classList.remove("skill-box:hover")
        // scroll suave hacia el primero
        card.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        setTimeout(() => {
          card.classList.remove("destacado-skill");
        }, 3000);
      }
    }
  });
}

// función para mostrar/ocultar la descripción completa de un proyecto
function toggleDescripcion(id) {
  const corta = document.getElementById(`corta-${id}`);
  const completa = document.getElementById(`completa-${id}`);
  const boton = document.querySelector(`#${id} .ver-mas`);

  const estaAbierto = !completa.classList.contains("d-none");

  if (estaAbierto) {
    completa.classList.add("d-none");
    corta.classList.remove("d-none");
    boton.textContent = "Ver más";
  } else {
    completa.classList.remove("d-none");
    corta.classList.add("d-none");
    boton.textContent = "Ver menos";
  }
}

// Funciones para el modal de imágenes de cursos
function abrirModalCursoImg(src, titulo) {
  console.log("Abriendo modal para curso:", titulo);
  console.log("URL de la imagen del curso:", src);
  const modal = document.getElementById("modalCursoImg");
  const imgModal = document.getElementById("imgCursoModal");
  const caption = document.getElementById("captionCurso");

  modal.style.display = "block";
  imgModal.src = src;
  caption.innerText = titulo;
}

function cerrarModalCursoImg() {
  document.getElementById("modalCursoImg").style.display = "none";
}