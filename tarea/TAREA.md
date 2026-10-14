# Tarea: Mi componente interactivo

## Componente elegido
Gestor interactivo de tareas con asignación de prioridades y control de estado en tiempo real.

## Version 1: solo DOM
```js
const lista = document.querySelector("#listaTareas");
const li = document.createElement("li");
li.textContent = "Tarea de prueba V1";
lista.appendChild(li);