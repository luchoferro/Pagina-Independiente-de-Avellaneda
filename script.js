// =========================
// GOLEADORES
// =========================

function mostrarGoleadores(seccion){

    document.getElementById("historica")?.classList.remove("activo");
    document.getElementById("siglo20")?.classList.remove("activo");
    document.getElementById("siglo21")?.classList.remove("activo");

    document.getElementById(seccion)?.classList.add("activo");
}


// =========================
// HISTORIA DESPLEGABLE
// =========================

const historias = document.querySelectorAll(".historia-item");

historias.forEach(item => {
    item.addEventListener("toggle", function(){
        if(this.open){
            historias.forEach(otro => {
                if(otro !== this){
                    otro.open = false;
                }
            });
        }
    });
});


// =========================
// TITULOS DESPLEGABLES
// =========================

const detalles = document.querySelectorAll(".dt");

detalles.forEach(item => {
    item.addEventListener("toggle", function(){
        if(this.open){
            detalles.forEach(otro => {
                if(otro !== this){
                    otro.removeAttribute("open");
                }
            });
        }
    });
});


// =========================
// MODOS (70 + 1900)
// =========================

const hero = document.getElementById("hero");
const escudo = document.getElementById("escudoHero");
const titulo = document.getElementById("tituloHero");
const subtitulo = document.getElementById("subtituloHero");

let modoHistorico = localStorage.getItem("modo70") === "true";
let modoClasico = localStorage.getItem("modo1900") === "true";

if(hero && escudo && titulo){

    hero.addEventListener("click", () => {

        hero.classList.add("fade");

        setTimeout(() => {

            // NORMAL → 70
            if(!modoHistorico && !modoClasico){

                document.body.classList.add("modo70");
                document.body.classList.remove("modo1900");

                localStorage.setItem("modo70", "true");
                localStorage.setItem("modo1900", "false");

                hero.style.backgroundImage = 'url("imagenes/historia/doble-visera.jpg")';
                escudo.src = "imagenes/historia/escudo70.png";

                titulo.textContent = "Independiente de los años 70";

                if(subtitulo){
                    subtitulo.textContent = "La era dorada del Rey de Copas";
                }

                modoHistorico = true;
                modoClasico = false;
            }

            // 70 → 1900
            else if(modoHistorico && !modoClasico){

                document.body.classList.remove("modo70");
                document.body.classList.add("modo1900");

                localStorage.setItem("modo70", "false");
                localStorage.setItem("modo1900", "true");

                hero.style.backgroundImage = 'url("imagenes/historia/estadio1900.jpg")';
                escudo.src = "imagenes/historia/escudo1900.png";

                titulo.textContent = "Club Atlético Independiente (1900)";

                if(subtitulo){
                    subtitulo.textContent = "Los orígenes del Rey de Copas";
                }

                modoHistorico = false;
                modoClasico = true;
            }

            // 1900 → NORMAL
            else{

                document.body.classList.remove("modo70");
                document.body.classList.remove("modo1900");

                localStorage.setItem("modo70", "false");
                localStorage.setItem("modo1900", "false");

                hero.style.backgroundImage = 'url("estadio.jpg")';
                escudo.src = "escudo.png";

                titulo.textContent = "Club Atlético Independiente";

                if(subtitulo){
                    subtitulo.textContent = "El Rey de Copas";
                }

                modoHistorico = false;
                modoClasico = false;
            }

            hero.classList.remove("fade");

        }, 600);

    });
}


// =========================
// CARGA MODOS (IMPORTANTE)
// =========================

window.addEventListener("load", () => {

    const modo70 = localStorage.getItem("modo70");
    const modo1900 = localStorage.getItem("modo1900");

    if(modo70 === "true"){
        document.body.classList.add("modo70");
    }

    if(modo1900 === "true"){
        document.body.classList.add("modo1900");
    }
});


// =========================
// GOLEADORES DATA
// =========================

const goleadores = [
  { nombre: "Arsenio Erico", goles: 295, siglo: "xx" },
  { nombre: "Manuel Seoane", goles: 233, siglo: "xx" },
  { nombre: "Vicente de la Mata", goles: 152, siglo: "xx" },
  { nombre: "Luis Ravaschino", goles: 136, siglo: "xx" },
  { nombre: "Antonio Sastre", goles: 112, siglo: "xx" },
  { nombre: "Ricardo Bochini", goles: 108, siglo: "xx" },
  { nombre: "Ernesto Grillo", goles: 90, siglo: "xx" },
  { nombre: "Norberto Outes", goles: 90, siglo: "xx" },
  { nombre: "Raimundo Orsi", goles: 90, siglo: "xx" },
  { nombre: "Camilo Cervino", goles: 89, siglo: "xx" },
  { nombre: "Rodolfo Micheli", goles: 76, siglo: "xx" },
  { nombre: "Raúl Bernao", goles: 70, siglo: "xx" },

  { nombre: "Daniel Montenegro", goles: 57, siglo: "xxi" },
  { nombre: "Germán Denis", goles: 56, siglo: "xxi" },
  { nombre: "Facundo Parra", goles: 41, siglo: "xxi" },
  { nombre: "Andrés Silvera", goles: 34, siglo: "xxi" },
  { nombre: "Emmanuel Gigliotti", goles: 26, siglo: "xxi" },
  { nombre: "Sergio Agüero", goles: 23, siglo: "xxi" },
  { nombre: "Diego Forlán", goles: 22, siglo: "xxi" },
  { nombre: "Silvio Romero", goles: 18, siglo: "xxi" },
  { nombre: "Lucas Albertengo", goles: 17, siglo: "xxi" },
  { nombre: "Alan Velasco", goles: 15, siglo: "xxi" },
  { nombre: "Lucas Romero", goles: 12, siglo: "xxi" }
];

function render(){
  const xx = document.getElementById("gridXX");
  const xxi = document.getElementById("gridXXI");

  if(!xx || !xxi) return;

  xx.innerHTML = "";
  xxi.innerHTML = "";

  goleadores.filter(j => j.siglo === "xx").forEach(j => {
    xx.innerHTML += `
      <div class="card-goleador">
        <h3>${j.nombre}</h3>
        <p>${j.goles} goles</p>
      </div>
    `;
  });

  goleadores.filter(j => j.siglo === "xxi").forEach(j => {
    xxi.innerHTML += `
      <div class="card-goleador">
        <h3>${j.nombre}</h3>
        <p>${j.goles} goles</p>
      </div>
    `;
  });
}

function tablaHistorica(){
  const tabla = document.getElementById("tablaHistorica");
  if(!tabla) return;

  const ordenados = [...goleadores].sort((a,b)=>b.goles-a.goles);

  tabla.innerHTML = `
    <tr>
      <th>Pos</th>
      <th>Jugador</th>
      <th>Goles</th>
    </tr>
  `;

  ordenados.forEach((j,i)=>{
    tabla.innerHTML += `
      <tr>
        <td>${i+1}</td>
        <td>${j.nombre}</td>
        <td>${j.goles}</td>
      </tr>
    `;
  });
}


// =========================
// TRANSFERS
// =========================

const ventas = [
  { jugador: "Sergio Agüero", destino: "Atlético de Madrid", año: "2006/07", monto: 23000000 },
  { jugador: "Barco", destino: "Atlanta United", año: "2017/18", monto: 14400000 }
];

const compras = [
  { jugador: "Cecilio Domínguez", origen: "América", año: "2018/19", monto: 5300000 },
  { jugador: "Romero", origen: "Vélez", año: "2019/20", monto: 3000000 }
];

function renderTransfers(){
  const ventasTable = document.getElementById("tablaVentas");
  const comprasTable = document.getElementById("tablaCompras");

  if(!ventasTable || !comprasTable) return;

  ventasTable.innerHTML = "";
  comprasTable.innerHTML = "";

  ventas.sort((a,b)=>b.monto-a.monto).forEach((v,i)=>{
    ventasTable.innerHTML += `
      <tr>
        <td>${i+1}</td>
        <td>${v.jugador}</td>
        <td>${v.destino}</td>
        <td>${v.año}</td>
        <td>€${v.monto.toLocaleString()}</td>
      </tr>
    `;
  });

  compras.sort((a,b)=>b.monto-a.monto).forEach((c,i)=>{
    comprasTable.innerHTML += `
      <tr>
        <td>${i+1}</td>
        <td>${c.jugador}</td>
        <td>${c.origen}</td>
        <td>${c.año}</td>
        <td>€${c.monto.toLocaleString()}</td>
      </tr>
    `;
  });
}


// =========================
// ONLOAD FINAL (ARREGLADO)
// =========================

window.addEventListener("load", () => {
  render();
  tablaHistorica();
  renderTransfers();
});

function mostrarGoleadas(id){

    let secciones = document.querySelectorAll(".seccion-goleadas");

    secciones.forEach(sec =>{
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}

/* ========================= */
/* RESÚMENES HISTÓRICOS */
/* ========================= */

function mostrarSeccion(id){

    const secciones =
    document.querySelectorAll(".pagina-seccion");

    secciones.forEach(function(seccion){

        seccion.classList.remove("activo");

    });

    document
        .getElementById(id)
        .classList.add("activo");
}

function mostrarPartido(id) {

    const secciones =
        document.querySelectorAll('.pagina-seccion');

    secciones.forEach(seccion => {
        seccion.classList.remove('activo');
    });

    document
        .getElementById(id)
        .classList.add('activo');
}