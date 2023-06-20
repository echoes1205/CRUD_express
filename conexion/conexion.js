var mysql = require('mysql');

var connection = mysql.createConnection({
    //variables de conexion
    host: 'localhost',
    user: 'root', 
    password: '',
    database: 'ventas', 
});

connection.connect(
    (err) =>{
        if (!err) {
            console.log('Conexion exitosa');
        }else{
            console.log('Error en la conexion');    
        }
    }
);



module.exports=connection



//connection.query("SELECT * FROM tbproductos", function (err,resultado){
    //console.log(resultado)
//});

//connection.end();