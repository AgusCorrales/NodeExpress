const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());


const productos = [
    {id:1, nombre: 'Taza de Harry Potter' , precio: 300},
    {id:2, nombre: 'FIFA PS5 23' , precio: 1000},
    {id:3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
    {id:4, nombre: 'Zelda Breath of the Wild' , precio: 200},
    {id:5, nombre: 'Skin Valorant' , precio: 120},
    {id:6, nombre: 'Taza de Star Wars' , precio: 220}
]


app.get('/productos',(req,res)=>{
    res.send(productos)
});


//Crear endpoint para poder crear un producto nuevo
app.post('/productos', (req,res)=>{
    const nuevoProducto = {
        id: productos.length +1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    }
    productos.push(nuevoProducto);
    res.status(201).send(productos)
});

//Crear endpoint para poder actualizar un producto
app.put('/productos/:id',(req,res)=>{
    const cambio = productos.some(producto => producto.id == req.params.id)
    if(cambio){
        productos.forEach(producto=>{
            if(producto.id == req.params.id){
                producto.nombre = req.body.nombre || producto.nombre
                producto.precio = req.body.precio || producto.precio
            } 
        })
        res.send(productos)
    }else{
        res.status(404).send(`Producto con id ${req.params.id} no encontrado`);
    }
})


//Crear endpoint para poder eliminar un producto
app.delete('/productos/:id', (req,res)=>{
    const borrar = productos.some(producto => producto.id == req.params.id)
    if(borrar){
        const productosFiltro = productos.filter(producto => producto.id != req.params.id)
        res.send(productosFiltro)
    }else{
        res.status(404).send(`Producto con id ${res.params.id} no encontrado`);
    }
})

//Crear filtro por precio de producto
app.get('/productos/:precio',(req,res)=>{
    const filtrarPrecio = productos.filter(producto => producto.precio == req.params.precio)
    res.send(filtrarPrecio)

})

//Crear filtro que muestre los productos con un precio entre 50 y 250.
app.get('/productosFiltrados', (req,res)=>{
    const rangoPrecio = productos.filter(producto => (producto.precio >50) && (producto.precio <250))
    res.send(rangoPrecio)
})

//Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto
app.get('/productoFiltradoId/:id',(req,res)=>{
    const filtroId = productos.filter(producto => producto.id == req.params.id)
    res.send(filtroId)
})


//Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto
app.get('/productoFiltradoPorNombre/:nombre', (req,res)=>{
    const filtroNombre = productos.filter(producto => producto.nombre == req.params.nombre)
    res.send(filtroNombre)
})




app.listen(PORT,()=>{
    console.log(`Servidor levantado en el puerto ${PORT}`);
});
