// Managers of the route Fornecedores

import {
    SingUpFornecedoresService,
    SingInFornecedoresService,
    DeleteUserAndUserDataService,
} from "../Services/Fornecedores/index.js";

// Create a user
const SingUpFornecedoresManager = async (req, res) => {
    const response = await SingUpFornecedoresService(req);
    response.sucesso ? res.status(201) : res.status(400);
    res.send(response);
};

// Login a user
const SingInFornecedoresManager = async (req, res) => {
    const response = await SingInFornecedoresService(req);
    response.sucesso ? res.status(200) : res.status(400);
    res.send(response);
};

// Delete a user
const DeleteUserAndUserData = async (req, res) => {
    const response = await DeleteUserAndUserDataService(req);
    response.sucesso ? res.status(200) : res.status(400);
    res.send(response);
};

export {
    SingUpFornecedoresManager,
    SingInFornecedoresManager,
    DeleteUserAndUserData,
};
