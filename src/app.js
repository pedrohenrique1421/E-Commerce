import express from "express";
import FornecedorRouter from "./Routers/FornecedoresR.js";

const app = express();
const port = 3030;

app.use(express.json());

app.use("/fornecedor", FornecedorRouter);

app.listen(port, () => {
  console.log(`- Escutando a porta: ${port} -`);
});
