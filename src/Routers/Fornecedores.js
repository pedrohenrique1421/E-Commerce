import { Router } from "express";
import {
  GetFornecedoresManager,
  GetLoginFornecedoresManager,
  PostFornecedoresManager,
  PatchFornecedoresManager,
  DeleteFornecedoresManager,
} from "../Managers/Fornecedores.js";

const FornecedorRouter = Router();

FornecedorRouter.get("/", GetFornecedoresManager);

FornecedorRouter.get("/login", GetLoginFornecedoresManager);

FornecedorRouter.post("/", PostFornecedoresManager);

FornecedorRouter.patch("/", PatchFornecedoresManager);

FornecedorRouter.delete("/", DeleteFornecedoresManager);

export default FornecedorRouter;
