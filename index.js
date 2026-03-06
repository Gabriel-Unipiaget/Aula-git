const express = require("express");
const app = express();

app.get("/:nome/:idade",(req,rest) => {
    const {nome, idade} = req.params;
  rest.status(200).json({
    mensagem: `Seja Bem-Vindo ${nome}, você tem ${ idade } anos!`
  });
});

app.listen(3019, () => {
  console.log("Gabriel o servidor está ligado");
});