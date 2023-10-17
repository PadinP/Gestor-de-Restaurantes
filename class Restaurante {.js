class Restaurante {
  constructor(nombre, ubicacion, tipoDeCocina) {
    this.nombre = nombre;
    this.ubicacion = ubicacion;
    this.tipoDeCocina = tipoDeCocina;
  } //hola
}

class Gestor {
  constructor() {
    this.restaurantes = [];
  }

  agregarRestaurante(restaurante) {
    this.restaurantes.push(restaurante);
    //console.log(this.restaurantes)
  }

  editarRestaurante(nombre, nuevoRestaurante) {
    let found = false;
    for (let i = 0; i < this.restaurantes.length && !found; i++) {
      if (this.restaurantes[i].nombre === nombre) {
        this.restaurantes.splice(i, 1, nuevoRestaurante);
        found = true;
      }
    }
    if (!found) {
      console.log("Restaurante no encontrado");
    }

    // console.log(this.restaurantes)
  }

  eliminarRestaurante(nombre) {
    let found = false;
    for (let i = 0; i < this.restaurantes.length && !found; i++) {
      if (this.restaurantes[i].nombre === nombre) {
        this.restaurantes.splice(i, 1);
        found = true;
      }
    }
    if (!found) {
      console.log("Restaurante no encontrado");
    }
    //console.log(this.restaurantes)
  }

  mostrarRestaurantesPorTipo(tipoDeCocina) {
    let restaurantesDelTipo = [];
    for (let i = 0; i < this.restaurantes.length; i++) {
      if (this.restaurantes[i].tipoDeCocina === tipoDeCocina) {
        restaurantesDelTipo.push(this.restaurantes[i]);
      }
    }
    console.log(restaurantesDelTipo);
  }
}

// Crear instancias de la clase Restaurante
const restaurante1 = new Restaurante("La Bodeguita", "Habana Vieja", "Cubana");
const restaurante2 = new Restaurante("El Floridita", "Habana Vieja", "Cubana");
const restaurante3 = new Restaurante(
  "San Cristobal",
  "Centro Habana",
  "Internacional"
);
const restaurante4 = new Restaurante(
  "La Guarida",
  "Centro Habana",
  "Internacional"
);
const restaurante5 = new Restaurante("El Cocinero", "Vedado", "Internacional");

// Crear una instancia de la clase Gestor
const gestor = new Gestor();

// Agregar varios restaurantes al gestor de restaurantes
gestor.agregarRestaurante(restaurante1);
gestor.agregarRestaurante(restaurante2);
gestor.agregarRestaurante(restaurante3);
gestor.agregarRestaurante(restaurante4);
gestor.agregarRestaurante(restaurante5);

// Editar un restaurante
let restauranteEditado = new Restaurante(
  "La Guarida",
  "Centro Habana",
  "Cubana"
);
gestor.editarRestaurante("La Guarida", restauranteEditado);

//  Eliminar un restaurante
gestor.eliminarRestaurante("El Floridita");

//  Mostrar restaurantes de un tipo de cocina específico
gestor.mostrarRestaurantesPorTipo("Internacional");
//aaaaaah
