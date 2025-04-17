const productos = [
  {
    id: 1,
    nombre: "Wenstern",
    categoria: "texanas",
    descripcion: "Texanas color negro y manteca.",
    precio: 60000,
    imagen: "/public/images/wenstern-n-m.JPG",
    stock: 5, // ➕ agregado
  },
  {
    id: 2,
    nombre: "Sidney",
    categoria: "texanas",
    descripcion: "Texanas Sidney color negro.",
    precio: 80000,
    imagen: "/public/images/sidney-n.jpg",
    stock: 10,
  },
  {
    id: 3,
    nombre: "Rouse",
    categoria: "texanas",
    descripcion: "Texanas Rouse color negro.",
    precio: 70000,
    imagen: "/public/images/rouse-n.jpg",
    stock: 7,
  },
  {
    id: 4,
    nombre: "Sirio",
    categoria: "botas",
    descripcion: "Botas Sirio color negro.",
    precio: 65000,
    imagen: "/public/images/sirio-n.jpg",
    stock: 3,
  },
  {
    id: 5,
    nombre: "Natal",
    categoria: "botas",
    descripcion: "Botas Natal color negro.",
    precio: 75000,
    imagen: "/public/images/natal-n.jpeg",
    stock: 8,
  },
  {
    id: 6,
    nombre: "Margo",
    categoria: "botas",
    descripcion: "Botas Margo color negro.",
    precio: 55000,
    imagen: "/public/images/margo-n.jpeg",
    stock: 4,
  },
  {
    id: 7,
    nombre: "Brooklyn",
    categoria: "borcegos",
    descripcion: "Borcegos Brooklyn color negro con cordones plateados.",
    precio: 60000,
    imagen: "/public/images/brooklyn-n-p.jpeg",
    stock: 15,
  },
  {
    id: 8,
    nombre: "Cristina",
    categoria: "borcegos",
    descripcion: "Borcegos Cristina color negro.",
    precio: 68000,
    imagen: "/public/images/cristina.jpeg",
    stock: 11,
  },
  {
    id: 9,
    nombre: "Mica",
    categoria: "borcegos",
    descripcion: "Borcegos Mica color negro.",
    precio: 67000,
    imagen: "/public/images/mica.jpeg",
    stock: 9,
  },
  {
    id: 10,
    nombre: "Lupe",
    categoria: "zapatillas",
    descripcion: "Zapatillas Lupe color blanco.",
    precio: 59000,
    imagen: "/public/images/lupe-b.jpg",
    stock: 2,
  },
  {
    id: 11,
    nombre: "Kala",
    categoria: "zapatillas",
    descripcion: "Zapatillas Kala color negro.",
    precio: 63000,
    imagen: "/public/images/kala-n.JPG",
    stock: 7,
  },
];

// Traigo todos los productos
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

// Traigo un solo producto por ID
export const getProductoById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === parseInt(id));
      resolve(producto);
    }, 1000);
  });
};

// Filtra productos por categoría
export const getProductosByCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosFiltrados = productos.filter(
        (p) => p.categoria === categoriaId
      );
      resolve(productosFiltrados);
    }, 1000);
  });
};
