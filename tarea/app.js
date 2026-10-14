// Clase Tarea
class Tarea {
    constructor(id, descripcion, prioridad) {
      this.id = id;
      this.descripcion = descripcion;
      this.prioridad = prioridad;
    }
  
    formato() {
      return `[${this.prioridad.toUpperCase()}] ${this.descripcion}`;
    }
  
    esAltaPrioridad() {
      return this.prioridad === "Alta";
    }
  }
  
  // Elementos del DOM
  const formTarea = document.querySelector("#formTarea");
  const txtTarea = document.querySelector("#txtTarea");
  const selPrioridad = document.querySelector("#selPrioridad");
  const listaTareas = document.querySelector("#listaTareas");
  const msgError = document.querySelector("#msgError");
  const feedback = document.querySelector("#feedback");
  const contador = document.querySelector("#contador");
  
  let totalTareas = 0;
  
  // Evento 1: input (Feedback inmediato al usuario)
  txtTarea.addEventListener("input", () => {
    feedback.textContent = "Escribiendo: " + txtTarea.value;
  });
  
  // Evento 2: submit (Validación y agregar tarea al DOM)
  formTarea.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const texto = txtTarea.value.trim();
    if (texto === "") {
      msgError.textContent = "Error: La descripción de la tarea no puede estar vacía.";
      return;
    }
    msgError.textContent = "";
  
    const nuevaTarea = new Tarea(Date.now(), texto, selPrioridad.value);
  
    // Crear elementos en el DOM
    const li = document.createElement("li");
    li.textContent = nuevaTarea.formato();
  
    if (nuevaTarea.esAltaPrioridad()) {
      li.classList.add("alta");
    }
  
    // Evento 3: click (Botón para eliminar elemento del DOM)
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.classList.add("btn-borrar");
    btnBorrar.addEventListener("click", () => {
      li.remove();
      totalTareas--;
      contador.textContent = totalTareas;
    });
  
    li.appendChild(btnBorrar);
    listaTareas.appendChild(li);
  
    totalTareas++;
    contador.textContent = totalTareas;
  
    formTarea.reset();
    feedback.textContent = "Escribiendo: ...";
  });