let xhr = new XMLHttpRequest; //nuestro "cartero"
/* 
XHR.readystate
0 - Objeto Instancia
1 - Objeto configurado
2 - Headers fueron enviados y recibidos
3 - Descargando
4 - Finalizado - No necesariamente exitoso
*/

console.log(xhr);
console.log(xhr.readyState); //readystate en 0
//métodos -> GET - POST - PUT - PATCH - DELETE
//Pedidos externos: CORS - Cross Origin Resource Sharing
xhr.open("GET", "texto.txt");
//open() sirve para una correcta solicitud de XHR
console.log(xhr);
console.log(xhr.readyState);//readystate en 1 proceso de configuración del objeto

//Envio
xhr.send();//Se envia si o si luego de configurar el objeto a enviar

//XAMP
//localhost
//127.0.0.1
//C:xampp/htdocs