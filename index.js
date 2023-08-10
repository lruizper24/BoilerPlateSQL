const express = require("express");
const server = express();
const port = 3000;

// rutas y endpoints
//http://localhost:3000/ejemplo
// con esta función administro una ruta que es:
// mi localhost: 3000(de mi constate port) /ejemplo que es lo que esta en la función: server.get("/ejemplo")
server.get("/ejemplo", (req, res) => {
  res.send("Hello World!");
}); 

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
