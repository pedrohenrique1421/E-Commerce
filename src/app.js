import express from "express";
import FornecedorRouter from "./Routers/Fornecedores.js";

const app = express();
const port = 3030;
app.use(express.json());

app.use("/fornecedor", FornecedorRouter);

app.post("/", function (req, res) {
  res.send("Got a POST request");
});

app.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});

app.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
  console.log(`Escutando a porta: ${port}`);
});
