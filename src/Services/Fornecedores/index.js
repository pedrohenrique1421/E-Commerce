import fs from "fs";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

const schema = z.object({
  nome: z
    .string({ message: "nome não é uma string" })
    .min(3, { message: "nome invalido" }),
  telefone: z
    .string({ message: "telefone não é uma string" })
    .min(10, { message: "telefone pequeno" }),
  estado: z
    .string({ message: "estado não é uma string" })
    .min(1, { message: "estado pequeno" }),
  cidade: z
    .string({ message: "cidade não é uma string" })
    .min(3, { message: "cidade invalida" }),
  bairro: z
    .string({ message: "bairro não é uma string" })
    .min(3, { message: "bairro invalido" }),
  numero: z
    .number({ message: "numero não é um numero( number )" })
    .positive({ message: "numero é negativo" }),
  email: z
    .string({ message: "email não é uma string" })
    .email({ message: "email não é um email valido" }),
  senha: z
    .string({ message: "senha não é uma string" })
    .min(8, { message: "senha muito pequena, menor que 8 caracteres" })
    .max(12, { message: "senha muito grande, maior que 12 caracteres" }),
});

const AtualizarAquivo = (newDb) => {
  try {
    fs.writeFileSync("./src/DB/Fornecedores/index.js", JSON.stringify(newDb));
  } catch (e) {
    throw new Error(e.message);
  }
};

const Lerarquivo = () => {
  try {
    const db = JSON.parse(fs.readFileSync("./src/DB/Fornecedores/index.js"));
    return db;
  } catch (e) {
    throw new Error("Error ao ler arquivo");
  }
};

const GetFornecedores = () => {
  try {
    const db = Lerarquivo();
    return db;
  } catch (e) {
    return e;
  }
};

const PostFornecedores = (params, res) => {
  try {
    schema.parse(params);
    const uuid = uuidv4();
    const data = { ...params, id: uuid };
    let db = Lerarquivo();
    let usersExists = false;
    db.forEach((item, i) => {
      if (item.email === params.email) {
        usersExists = true;
      }
    });

    if (!usersExists) {
      const newDb = Object.keys(db).length >= 1 ? [...db, data] : [data];
      AtualizarAquivo(newDb);
      res.status(201);
      return { sucesso: true, id: uuid };
    } else {
      res.status(400);
      return ["Email já utilizado", { sucesso: false }];
    }
  } catch (e) {
    res.status(400);
    return [e.issues[0].message, { sucesso: false }];
  }
};

const PatchFornecedores = (ref, params, res) => {
  try {
    let db = Lerarquivo();
    schema.parse(params);
    let change = false;
    db.forEach((item, i) => {
      if (item.id === ref) {
        db[i] = { ...params, id: ref };
        change = true;
      }
    });
    AtualizarAquivo(db);

    res.status(200);
    if (change) {
      res.status(200);
      return { sucesso: true };
    } else {
      res.status(400);
      return ["id não encontrado", { sucesso: false }];
    }
  } catch (e) {
    res.status(400);
    return [e.issues[0].message, { sucesso: false }];
  }
};

const DeleteFornecedores = (res, params) => {
  try {
    let db = Lerarquivo();

    let itemLido = {};
    const newDb = [];
    db.forEach((item, i) => {
      if (item.senha === params.senha && item.id == params.id) {
        // Deletando
      } else {
        newDb.push(item);
      }
    });

    AtualizarAquivo(newDb);

    res.status(200);
    return { sucesso: true };
  } catch (e) {
    res.status(500);
    return [e, { sucesso: false }];
  }
};

const GetLoginFornecedores = (res, params) => {
  try {
    const db = Lerarquivo();
    let resposta = null;
    db.forEach((item, i) => {
      if (item.email === params.email && item.senha === params.senha) {
        res.status(200);
        resposta = [db[i], { sucesso: true }];
      }
    });
    if (resposta) {
      res.status(200);
      return resposta;
    } else {
      res.status(400);
      return ["senha e/ou email invalidos", { sucesso: false }];
    }
  } catch (e) {
    res.status(400);
    return [e, { sucesso: false }];
  }
};

export {
  GetFornecedores,
  GetLoginFornecedores,
  PostFornecedores,
  PatchFornecedores,
  DeleteFornecedores,
};
