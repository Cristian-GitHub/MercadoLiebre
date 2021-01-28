const express = require ('express');
const app = express ();

const path = require ('path'); //llamo la funcion path con el require, esto me entrega con resolve la concatenación de directorios
const publicpath = path.resolve (__dirname,'./public'); //resuelvo como variable publicpath la ruta a la carpeta public

app.use (express.static(publicpath)); //hacemos estática la ruta del directorio public, para que luego el HTML la encuentre facil

app.set ('puerto', process.env.PORT || 3000);

app.listen (app.get ('puerto'), function(){
    console.log ("LEVANTÓ EL SERVIDOR");
});

app.get ('/', function (req,res){
    res.sendFile (path.resolve (__dirname, './views/home.html'));
});

app.get ('/register', function (req,res){
    res.sendFile (path.resolve(__dirname, './views/register.html'));
});

app.get ('/login', function (req,res){
    res.sendFile (path.resolve(__dirname, './views/login.html'));
});
