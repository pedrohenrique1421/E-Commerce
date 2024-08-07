import { Router } from "express";
import {
    SingUpFornecedoresManager,
    SingInFornecedoresManager,
    DeleteUserAndUserData,
} from "../Managers/FornecedoresM.js";

const FornecedorRouter = Router();

FornecedorRouter.get("/", (req, res) => {
    console.log("rota get default");
    res.send("rota get default");
});

FornecedorRouter.get("/sign", SingInFornecedoresManager); // Logar em uma conta
FornecedorRouter.post("/sign", SingUpFornecedoresManager); // Criar uma conta

FornecedorRouter.patch("/", (req, res) => {
    console.log("rota patch");
    res.send("rota patch");
});

FornecedorRouter.delete("/", DeleteUserAndUserData);

export default FornecedorRouter;
