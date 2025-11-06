export class Producto {
  //LAS PROPIEDADES PARA QUE SEAN ACCESIBLES DEBEN SER public
  //   public nombre: string;
  //   public imagen: string;
  //   public precio: number;
  //VAMOS A CREAR UN CONSTRUCTO CON PARAMETROS PARA QUE RECIBA
  //LA INFORMACION DE LAS PROPIEDADES DIRECTAMENTE
  //   constructor(name: string, image: string, price: number) {
  //     this.nombre = name;
  //     this.imagen = image;
  //     this.precio = price;
  //   }

  //OTRA SINTAXIS
  constructor(public nombre: string, public imagen: string, public precio: number) {}
}
