import { z } from "zod";

const schemaCreateUser = z.object({
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
    cnpj: z
        .string({ message: "cnpj não é uma string" })
        .min(18, { message: "senha muito pequena, menor que 8 caracteres" }),
});

const schemaUserAndPassword = z.object({
    email: z
        .string({ message: "email não é uma string" })
        .email({ message: "email não é um email valido" }),
    senha: z
        .string({ message: "senha não é uma string" })
        .min(8, { message: "senha muito pequena, menor que 8 caracteres" })
        .max(12, { message: "senha muito grande, maior que 12 caracteres" }),
});

export { schemaCreateUser, schemaUserAndPassword };
