# API e-commerce
<details>
<summary>Rotas da API</summary>
<hr>

> ATENÇÃO! Os endpoints deverão seguir a estrutura descrita logo abaixo.
<br>
<details>
<summary>Rotas de Fornecedores</summary>

Rota Voltada para os fornecedores/lojas que participaram do site
<br>

rotas | nome | descrição
--- | --- | ---
<kbd>/fornecedor/login | rota login | realiza o login do fornecedor
<kbd>/fornecedor/ | rota fornecedores | retorna todos os fornecedores
<kbd>/fornecedor/ | rota criar fornecedor | cria um fornecedor
<kbd>/fornecedor/ | rota modificar fornecedor | modifica um fornecedor
<kbd>/fornecedor/ | rota deletar fornecedor | deleta um fornecedor

<!-- item -->
<details>
<summary>Rota login</summary>

Retorna um objeto com as informações do fornecedor se corretas as informações

Método
```
GET
```
Rota
```
/fornecedor/login
```
Parametros
```json
{
    email: string(email do usuario),
    senha: string(senha do usuario)
}
```
Resposta/Response (padrão)
```json
[
    {
        "nome": "Batera shop 2",
        "telefone": "81984254586",
        "estado": "PE",
        "cidade": "Recife",
        "bairro": "Varzea",
        "numero": 23,
        "email": "Teste2@gmail.com",
        "senha": "lino200615ph",
        "id": "98257d29-7dc1-4680-8ba2-4d2210636cde"
    },
    {
        "sucesso": true
    }
]
```
<hr>
</details>
<!-- item -->
<details>
<summary>Rota fornecedores (adm)</summary>

Retorna uma lista de fornecedores

Método
```
GET
```
Rota
```
/fornecedores/
```
Resposta/Response (exemplo)
```json
[
   {
        "nome": "Hip Hop Store",
        "telefone": "81984254586",
        "estado": "PE",
        "cidade": "Recife",
        "bairro": "Varzea",
        "numero": 23,
        "email": "PptionTheDev@gmail.com",
        "senha": "lino200615ph",
        "id": "467f22b1-33fe-4aa3-9494-29e2842231c5"
    },
    {
        "nome": "Batera shop",
        "telefone": "81984254586",
        "estado": "PE",
        "cidade": "Recife",
        "bairro": "Varzea",
        "numero": 23,
        "email": "Phenriquelins1@gmail.com",
        "senha": "lino200615ph",
        "id": "fd63a540-27a7-4684-bcc6-be5c31d262de"
    },
    ...
]
```

<hr>
</details>

<!-- item -->
<details>
<summary>Rota criar fornecedor</summary>

Cria um fornecedor com as informações enviadas

Método
```
POST
```
Rota
```json
/fornecedores/
```
Corpo/Body
```json
{
    "nome": string(tamanho min: 3),
    "telefone": string(tamanho min: 10),
    "estado": string(tamanho min: 1, Sigla),
    "cidade": string(tamanho min: 3),
    "bairro": string(tamanho min: 3),
    "numero": number(positivo inteiro),
    "email": string(tipo email),
    "senha": string(tamanho min: 8, tamanho max: 12)
}
```
Resposta/Response (exemplo)
```json
{
    "sucesso": true,
    "id": "deeba877-436c-4f87-adda-1a70e230724f"
}
```
<hr>
</details>
<!-- item -->
<details>
<summary>Rota modificar fornecedor</summary>

Modifica um fornecedor

Método
```
PATCH
```
Rota
```
/fornecedores/
```
Parametros
```json
{
    Id: string(id do fornecedor)
}
```
Corpo/Body
```json
{
    "nome": string(tamanho min: 3),
    "telefone": string(tamanho min: 10),
    "estado": string(tamanho min: 1, Sigla),
    "cidade": string(tamanho min: 3),
    "bairro": string(tamanho min: 3),
    "numero": number(positivo inteiro),
    "email": string(tipo email),
    "senha": string(tamanho min: 8, tamanho max: 12)
}
```
Resposta/Response (exemplo)
```json
{
    "sucesso": true
}
```

<hr>
</details>

<!-- item -->
<details>
<summary>Rota deletar fornecedor</summary>

Deleta um fornecedor

Método
```
DELETE
```
Rota
```
/fornecedores/
```
Parametros
```json
{
    id: string(id do fornecedor),
    senha: string(senha do fornecedor)
}
```
Resposta/Response (exemplo)
```json
{
    "sucesso": true
}
```

<hr>
</details>

</details>

</details>
