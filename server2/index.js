import express from 'express';

const port = 80;
const app = express();


//RUTAS
app.get("/", async (req, res) => {
  res.json('CONTENEDOR 2');
});


app.listen(port, () => {
  console.log(`Servidor en ejecución en puerto:${port}`);
});