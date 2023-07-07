var carrito = {
  productos: [],
  folio: "",
  subTotal: 0,
  total: 0,
  calcularTotal: function (subtotal) {
    this.total = subtotal * 1.16;
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
var sum = 0;

function Agregar() {
  let nameValue = document.getElementById("nombre").value;
  let qntValue = document.getElementById("cantidad").value;
  let cost = document.getElementById("precio").value;
  productsName.push(nameValue);
  productsQnt.push(qntValue);
  productsCost.push(cost);
  sum = productos.calcularSubtotal();
}

function Cerrar() {
  var carritoProduct = productos;
  var carritoSubtotal = sum;
  var carritoFolio = (Math.random() + 1).toString(36).substring(7);
  carrito.productos = carritoProduct;
  carrito.subTotal = carritoSubtotal;
  carrito.folio = carritoFolio;
  carrito.calcularTotal(carritoSubtotal);
  document.getElementById("subtotalh").textContent = carrito.subTotal;
  document.getElementById("ivah").textContent = (carrito.total - carrito.subTotal).toFixed(2);
  document.getElementById("totalh").textContent = carrito.total;
}