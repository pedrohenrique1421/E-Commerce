import express from "express";
import cors from "cors";
import FornecedorRouter from "./Routers/FornecedoresR.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/fornecedor", FornecedorRouter);

app.listen(PORT, () => {
    console.log(`- Escutando a porta: ${PORT} -`);
});
