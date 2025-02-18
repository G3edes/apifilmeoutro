/***********************************************************************************\
|* Objetivo:Arquivo de configuração para padronizar mensages e status code da API   |
|* Data:18/02/2025                                                                  |
|* Autor:Gabriel Silva Guedes                                                       |
|* Versão:1.0                                                                       | 
\***********************************************************************************/

/********** Status Code De Mensagens De Erro**********/

const ERROR_REQUIRED_FIELDS={
    status: false, status_code: 400, menssage:'Erro:Não Foi Possível realizar a requisição, pois existem campos obrigatórios que não foram preenchidos ou não atendem a quantidade de caracteres!'
}
const ERROR_INTERNAL_SERVER={
    status: false, status_code: 500, menssage:'Erro:Devido a erros internos no servidor não foi possível processar a requisição!!'
}

/********** Status Code De Mensagens De Sucesso**********/

const SUCCESS_CREATED_ITEM={
    status: true, status_code: 201, menssage:'Item criado com sucesso!!'
}

module.exports={
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    SUCCESS_CREATED_ITEM
}