const { log } = require("console");
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());


//Ruta: Raíz del sitio (‘/’) ,Metodo: get, Acción: Mostrar un mensaje de bienvenid
app.get('/', (req,res)=>{
    res.send('Hola bienvenidos')
    
});


//Ruta: Productos, Método: get, Acción: Mostrar un mensaje que diga: listado de productos 
app.get('/productos',(req,res)=>{
    res.send('Listado de productos')
});


//Ruta: Productos, Método: post, Acción: Mostrar un mensaje que diga: crear un producto
app.post('/productos',(req,res)=>{
    res.send(`Crear un producto`)

});


//Ruta: Productos, Método: put, Acción: Mostrar un mensaje que diga: actualizar un producto
app.put('/productos',(req,res)=>{
    res.send(`Actualizar un producto`)
});


//Ruta: Productos, Método: delete, Acción: Mostrar un mensaje que diga: borrar un producto
app.delete('/productos',(req,res)=>{
    res.send(`Borrar un producto`)
});



//Ruta: Usuarios, Metodo: get, Acción: Mostrar un mensaje que diga: listado de usuarios
app.get('/usuarios',(req,res)=>{
    res.send('Listado de usuarios')
});


//Ruta: Usuarios, Método: post, Acción: Mostrar un mensaje que diga: crear un usuario
app.post('/usuarios',(req,res)=>{
    res.send('Crear un usuario')
});


//Ruta: Usuarios, Metodo: put, Acción: Mostrar un mensaje que diga: actualizar un usuario
app.put('/usuarios',(req,res)=>{
    res.send(`Actualizar un usuario`)
});


//Ruta: Usuarios, Metodo: delete, Acción: Mostrar un mensaje que diga: borrar un usuario
app.delete('/usuarios',(req,res)=>{
    res.send(`Borrar un usuario`)
});


app.listen(PORT,()=>{
    console.log(`Hola Bienvenidos`);
});





