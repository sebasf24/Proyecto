const { Router } = require('express');
const router = Router();

let productos =[
    {
        "id": 0,
        "nombre": "zapatilla",
        "precio": "$850"
    },
    {
        "id": 1,
        "nombre": "pantalon",
        "precio": "$650"
    },
    {
        "id": 2,
        "nombre": "zapatilla",
        "precio": "$950"
    }
]
let id=productos.length;

router.get('/productos',(req,res)=>{
    const idquery = req.query.id;
    if(idquery){
        res.json(productos[idquery]);
    }

    res.json(productos);
    
})

router.post('/productos',(req,res)=>{
    const { nombre,precio } =req.body;
    //console.log(req.body);
    const producto={
        id: id,
        nombre: nombre,
        precio:precio
    }
    id++;

    productos.push(producto);
    res.json({mensaje: "producto agregado"});

})

router.put('/productos',(req,res)=>{
    const { id, nombre, precio} =req.body;
    if(!id || !nombre || !precio){
        res.json({error: "error no existn los parametros necesarios"})
    }

    let producto = productos.find(prod => prod.id === id);

    producto.nombre=nombre;
    producto.precio=precio;

    res.json(producto);
})

router.delete('/productos', (req,res)=>{
    const { id } = req.body;
    let producto = productos.find(prod => prod.id === id);
    if(!producto){
        res.json({error: "El producto a eliminar no existe"});
    }

    productos = productos.filter( prod => prod.id !== producto.id);

    res.json({mensaje: "producto eliminado"});
})


module.exports = router;