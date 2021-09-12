//Funcion que reemplaza la lista actual por una vacia.
let Eliminar = () => {
  let elim = document.getElementById("lista");
  elim.innerHTML = `<div id="agregar" class="container div"></div>`;
};

//Funcion que solicita un producto y lo agrega al final de la lista
//sin reemplazar los datos que ya teniamos.
let Nuevo = () => {
  let nuevoItem = prompt("ingrese un nuevo producto");
  let div = document.getElementById("agregar");
  if(nuevoItem != ""){
    div.insertAdjacentHTML(
      'beforeend',
      `<div id="agregar" class="container div">
      <input type="checkbox" name="checkbox" id="checkbox" />
      <label for="checkbox">${nuevoItem}</label>
      </div>`
    );
  }else{
    alert("No debe ingresar un valor vacio");
  };
};
