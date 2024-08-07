import { db, auth } from "../config/firebase_config.js";
import { z } from "zod";

// Schema Zod validation
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
    cnpj: z
        .string({ message: "cnpj não é uma string" })
        .min(18, { message: "senha muito pequena, menor que 8 caracteres" }),
});

import { createUserWithEmailAndPassword } from "firebase/auth";
const SingUpFornecedoresManager = async (req, res) => {
    try {
        schema.parse(req.body);
        let user = {};
        await createUserWithEmailAndPassword(
            auth,
            req.body.email,
            req.body.senha
        )
            .then((userCredential) => {
                // Signed up
                user = userCredential.user;
            })
            .catch((error) => {
                throw new Error(error);
            });
        const data = req.body;
        delete data.email;
        delete data.senha;
        await CreateDocWithId(user.uid, data);
        res.status(201);
        res.send({
            id: user.uid,
            sucesso: true,
        });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.send({
            status: "error",
            sucesso: false,
        });
    }
};
import { deleteUser } from "firebase/auth";
import { deleteDoc } from "firebase/firestore";
const DeleteUserAndUserData = async (req, res) => {
    try {
        let user = {};
        await signInWithEmailAndPassword(auth, req.body.email, req.body.senha)
            .then((userCredential) => {
                user = userCredential.user;
            })
            .catch((error) => {
                throw new Error(error);
            });
        // Deletando o usuario
        await deleteUser(auth.currentUser);
        // Deletando os arquivos
        await deleteDoc(doc(db, "fornecedores", user.uid));
        res.status(203);
        res.send({
            sucesso: true,
        });
    } catch (e) {
        res.status(500);
        console.error(e);
        res.send({
            error: e.message,
            sucesso: false,
        });
    }
};

import { signInWithEmailAndPassword } from "firebase/auth";
const SingInFornecedoresManager = async (req, res) => {
    try {
        let user = {};
        await signInWithEmailAndPassword(auth, req.body.email, req.body.senha)
            .then((userCredential) => {
                user = userCredential.user;
            })
            .catch((error) => {
                throw new Error(error);
            });
        console.log(user);
        const userData = await ReadDocWithId(user.uid);
        res.status(200);
        res.send({
            dataId: user.uid,
            data: userData,
            sucesso: true,
        });
    } catch (e) {
        console.error(e);
        res.status(500);
        res.send({
            error: e.message,
            sucesso: false,
        });
    }
};

import { doc, setDoc } from "firebase/firestore";
const CreateDocWithId = async (id, data) => {
    await setDoc(doc(db, "fornecedores", id), data);
};

import { getDoc } from "firebase/firestore";
const ReadDocWithId = async (id) => {
    const docRef = doc(db, "fornecedores", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        throw new Error("Error ao importar dados");
    }
};

export {
    SingUpFornecedoresManager,
    SingInFornecedoresManager,
    DeleteUserAndUserData,
};
