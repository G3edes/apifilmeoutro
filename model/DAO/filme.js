/*********************************************************************************\
|* Objetivo:Criar a Comunicação com o Banco de Dados para fazer o CRUD de filmes  |
|* Data:11/02/2025                                                                |
|* Autor:Gabriel Silva Guedes                                                     |
|* Versão:1.0                                                                     | 
\*********************************************************************************/

/*Import da biblioteca do prima client para executar os scripts SQL*/
const {PrismaClient}=require('@prisma/client')

/*Inserir Um Novo Filme*/
const insertFilme= async function(filme){
    //Instancia(Criar um Objeto a ser Utilizado) a biblioteca do prisma/client
    const prisma = new PrismaClient()

    let sql = `insert into tbl_filme(
        nome,
        duracao,
        sinopse,
        data_lancamento,
        foto_capa,
        link_trailer
        )values(
        ${filme.nome},
        ${filme.duracao},
        ${filme.nome},
        ${filme.sinopse}
        ${filme.data_lancamento},
        ${filme.foto_capa},
        ${filme.link_trailer}
        )`

    //Executa o script sql do banco de dados e aguarda o retorno do bd para saber se deu certo
    
    let result =  await prisma.$executeRawUnsafe(sql)
    //FUNDAMENTAL|AWAIT| só funciona se a function for async 

    if (result)
        return true        
    else
        return false
}
/*Atualizar Um Filme Existente*/
const updateFilme= async function() {
    const prisma = new PrismaClient()
    
}
/*Excluir Um Filme Existente*/
const deleteFilme= async function() {
    const prisma = new PrismaClient()
}   

/*Retorna Todos Os Filmes Existentes*/
const selectAllFilme= async function() {
    const prisma = new PrismaClient()
}

/*Busca Um Filme Pelo ID*/
const selectByIdFilme= async function() {
    const prisma = new PrismaClient()

}

module.exports={
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilme,
    selectByIdFilme
}