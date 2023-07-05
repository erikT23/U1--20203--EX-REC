var carrito = {
  productos: [],
  folio: "",
  subTotal: 0,
  total: 0,
  calcularTotal: function (subtotal) {
    return (carrito.total = subtotal * 0.16);
  },
};

var productos = {
  nombre: [],
  cantidad: [],
  precio: [],
  calcularSubtotal: function () {
    var sum = 0;
    for (var i = 0; i < productos.cantidad.length; i++) {
      sum += productos.cantidad[i] * productos.precio[i];
    }
    return sum;
  },
};

var productsName = productos.nombre;
var productsQnt = productos.cantidad;
var productsCost = productos.precio;

function Agregar() {
  let nameValue = document.getElementById("nombre").value;
  console.log(nameValue);
  let qntValue = document.getElementById("cantidad").value;
  let cost = document.getElementById("precio").value;

  productsName.push(nameValue);

  productsQnt.push(qntValue);
  productsCost.push(cost);

  let sum = productos.calcularSubtotal();
  console.log(sum);
  console.log(JSON.stringify(productos));
}
