# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)
 
## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde la consola |Se seleccionó el título. | No|
| textContent desde app.js | El título. | Si|
| style.color |El color del título. | Si|
| classList.add | Se añadió una lista.|Si |
| createElement + appendChild |Se añadió una selección. | Si|

 
## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un click en el botón.| 1 |
| dblclick | Dos clicks en el botón. |1|
| mouseover | Pasar el puntero sobre el botón.|1|

 
## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | Se añadió el nombre en la pantalla| Si|
| Enviar sin preventDefault | La pantalla se recarga muy rápido.|Si |
| Enviar con preventDefault, correo sin @ |Mensaje de "correo no válido." | No|
| Enviar con preventDefault, correo con @ | El correo se envió.| No|

 
## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|--------|--------|--------|---------------|--------------------|
| laptop | |2500 | | 1875|
| mouse | |45 | |33.75 |
| teclado | |120 | | 90|
| monitor | |680 | | 510|

 
## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|--------|-----------------------------|------------------|
| Cuaderno 12.50 | 12.50| Si|
| + Lapicero 3.20 |3.20 | Si|
| + Mochila 89.90 |89.90 |Si |
| Sin Number() | 0.0| Si|
 