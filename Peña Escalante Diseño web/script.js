fetch("events.json")
  .then((res) => res.json())
  .then((data) => mostrarEventos(data));

let listaEventos = [];

function mostrarEventos(eventos) {
  listaEventos = eventos;

  let app = document.getElementById("app");

  let html = "<div class='grid'>";

  eventos.forEach((evento) => {
    html += `
<div class="card">

<img src="${evento.images[0]}" alt="${evento.title}">

<div class="contenido">

<h3>${evento.title}</h3>

<p><strong>Categoría:</strong> ${evento.category}</p>

<p><strong>Lugar:</strong> ${evento.city} - ${evento.venue}</p>

<p><strong>Fecha:</strong> ${evento.datetime.substring(0, 10)}</p>

<p><strong>Precio:</strong> ${evento.currency} ${evento.priceFrom}</p>

<button class="btn" onclick="verDetalle('${evento.id}')">
Ver detalle
</button>

</div>
</div>
`;
  });

  html += "</div><div id='detalle'></div>";

  app.innerHTML = html;
}

function verDetalle(id) {
  let evento = listaEventos.find((e) => e.id == id);

  document.getElementById("detalle").innerHTML = `

<div class="detalle-box">

<img src="${evento.images[0]}" class="detalle-img">

<div class="detalle-info">

<h2>${evento.title}</h2>

<p><strong>Ciudad:</strong> ${evento.city}</p>

<p><strong>Lugar:</strong> ${evento.venue}</p>

<p><strong>Fecha:</strong> ${evento.datetime.substring(0, 10)}</p>

<p><strong>Precio:</strong> ${evento.currency} ${evento.priceFrom}</p>

<p><strong>Stock:</strong> ${evento.stock}</p>

<p>${evento.description}</p>

</div>

</div>

`;
}

/* FORMULARIO */

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let consulta = document.getElementById("consulta").value;
  let mensaje = document.getElementById("mensaje");

  if (nombre == "" || correo == "" || consulta == "") {
    mensaje.innerHTML = "Complete todos los campos";
    mensaje.style.color = "red";
  } else {
    mensaje.innerHTML = "Datos enviados correctamente";
    mensaje.style.color = "green";
  }
});
