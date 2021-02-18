// requisição do mysql2
const mysql = require('mysql2');

//classe para objetos
class AlunoDao {

    constructor() {

        this._connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '12345',
            database: 'crud_node',
            port: '3307'

        })


        this._alunos = [
            { id: 1, nome: "josino", email: "email@gmail.com", curso: "Tec. em Gestão de Qualidade" },
            { id: 2, nome: "maria", email: "email@gmail.com", curso: "Tec. em Informatica para Internet" },
            { id: 3, nome: "josé", email: "email@gmail.com", curso: "Tecnologo em ADS" }
        ]
    }
    //função que exibe a tabela do banco de dados
    list() {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT * FROM alunos',
                function (err, results,) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                }
            )


        })
    }
    // conexão com o banco de dados e que faz a inserção de dados
    save(aluno) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'insert into alunos (nome, email, curso) values (?,?,?)', [aluno.nome, aluno.email, aluno.curso],
                function (err, results,) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                }
            )


        })

    }
    // atualização de dados dentro do banco
    update(aluno) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'update alunos set nome=?, email=?, curso=? where id=?', [aluno.nome, aluno.email, aluno.curso, aluno.id],
                function (err, results,) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                }
            )


        })
    }
    // encontrando informações atraves do ID
    findById(id) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'select * from alunos where id=?', [id],
                function (err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                }
            )
        })

    }
    // conexão do delete no banco de dados
    delete(id) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'delete from alunos where id=?', [id],
                function (err, results) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                }
            )
        })
    }

}
module.exports = AlunoDao