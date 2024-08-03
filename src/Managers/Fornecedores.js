import {
  GetFornecedores,
  PostFornecedores,
  PatchFornecedores,
  DeleteFornecedores,
  GetLoginFornecedores,
} from "../Services/Fornecedores/index.js";

const GetFornecedoresManager = (req, res) => {
  res.status(200).send(GetFornecedores());
};

const PostFornecedoresManager = (req, res) => {
  res.send(PostFornecedores(req.body, res));
};

const PatchFornecedoresManager = (req, res) => {
  res.send(PatchFornecedores(req.query.id, req.body, res));
};

const DeleteFornecedoresManager = (req, res) => {
  res.send(DeleteFornecedores(res, req.query));
};

const GetLoginFornecedoresManager = (req, res) => {
  res.send(GetLoginFornecedores(res, req.query));
};

export {
  GetFornecedoresManager,
  PostFornecedoresManager,
  PatchFornecedoresManager,
  DeleteFornecedoresManager,
  GetLoginFornecedoresManager,
};
