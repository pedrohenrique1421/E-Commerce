import { db, auth } from "../../config/firebase_config.js";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import {
    schemaCreateUser,
    schemaUserAndPassword,
} from "../Validation/SchemasZod.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    deleteUser,
} from "firebase/auth";

// Create a user
const SingUpFornecedoresService = async (req) => {
    try {
        // Validation
        schemaCreateUser.parse(req.body);
        schemaUserAndPassword.parse(req.query);
        // Create a user
        let user = {};
        await createUserWithEmailAndPassword(
            auth,
            req.query.email,
            req.query.senha
        )
            .then((userCredential) => {
                user = userCredential.user;
            })
            .catch((error) => {
                throw new Error(error.code);
            });
        await CreateDocWithId(user.uid, req.body).catch((e) => {
            throw new Error(e);
        });
        return {
            userId: user.uid,
            sucesso: true,
        };
    } catch (e) {
        return {
            error: e.message,
            sucesso: false,
        };
    }
};

// Login a user
const SingInFornecedoresService = async (req) => {
    try {
        schemaUserAndPassword.parse(req.query);
        let user = {};
        await signInWithEmailAndPassword(auth, req.query.email, req.query.senha)
            .then((userCredential) => {
                user = userCredential.user;
            })
            .catch((error) => {
                throw new Error(error.message);
            });
        const userData = await ReadDocWithId(user.uid);
        return {
            dataId: user.uid,
            data: userData,
            sucesso: true,
        };
    } catch (e) {
        return {
            error: e.message,
            sucesso: false,
        };
    }
};

const DeleteUserAndUserDataService = async (req) => {
    try {
        schemaUserAndPassword.parse(req.query);
        let user = {};
        await signInWithEmailAndPassword(auth, req.query.email, req.query.senha)
            .then((userCredential) => {
                user = userCredential.user;
            })
            .catch((error) => {
                throw new Error(error.message);
            });
        // Deletando o usuario
        await deleteUser(auth.currentUser).catch((e) => {
            throw new Error(e.message);
        });
        // Deletando os arquivos
        await deleteDoc(doc(db, "fornecedores", user.uid)).catch((e) => {
            throw new Error(e.message);
        });
        return {
            sucesso: true,
        };
    } catch (e) {
        return {
            error: e.message,
            sucesso: false,
        };
    }
};

export {
    SingUpFornecedoresService,
    SingInFornecedoresService,
    DeleteUserAndUserDataService,
};

// Functions not exported

const CreateDocWithId = async (id, data) => {
    await setDoc(doc(db, "fornecedores", id), data).catch((e) => {
        throw new Error(e.message);
    });
};

const ReadDocWithId = async (id) => {
    const docRef = doc(db, "fornecedores", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        throw new Error("Error ao importar dados");
    }
};
