// inicio/criação de aplicação express
const express = require('express');
const app = express();



// configuração do marko
require('marko/node-require');
var markoExpress = require("marko/express");
app.use(markoExpress());


// configuração do body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded())


// criando DAO
const AlunoDao = require("./dao/aluno-dao")
const dao = new AlunoDao();


//configuração de mensagens flash
const session = require('express-session');
const flash = require('connect-flash');
app.use(session({
    secret: 'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());


// aplicando rotas
app.get('/', function (req, res) {
    let response = {
        error_messages: req.flash("error"),
        success_messages: req.flash("success"),
        results: []
    }

    console.log(response);
    // metodo listar
    dao.list().then((results) => {

        response.results = results;
        res.marko(require('./templates/alunos.marko'), response);
    }).catch((err) => {
        console.log("OCORREU UM ERRO");
        response.error_messages.push("Algo deu errado com o servidor");
        res.marko(require('./templates/alunos.marko'), response);
    });

});
app.get('/form', function (req, res) {
    res.marko(require('./templates/form.marko'));
});
// solicitando dados por ID
app.get('/form/:id', function (req, res) {

    dao.findById(req.params.id).then((result) => {
        console.log(result)
        if (result.length > 0) {
            console.log();
            aluno = result[0];
            res.marko(require('./templates/form.marko'), aluno);
        } else {
            console.log()
            req.flash("error", "Não foi encontrado o aluno com o ID " + req.params.id);
            res.redirect("/");
        }

    }).catch((err) => {
        console.log(err);
        req.flash('error', "Ocorreu um erro ao buscar aluno de ID = " + req.params.id)
        res.redirect("/");

    });

});
// deletando informações do banco de dados
app.get('/alunos/delete/:id', function (req, res) {
    dao.delete(req.params.id).then((result) => {
        console.log();
        req.flash('success', 'Usuario removido com sucesso')
        res.redirect('/')
    }).catch((err) => {
        console.log(err);
        req.flash('error', 'Ocorreu um erro ao remover usuario.')
        res.redirect('/')
    });
});

// salvando eatualizando alunos no banco de dados
app.post('/alunos', function (req, res) {
    if (req.body.id) {
        dao.update(req.body).then((result) => {
            req.flash('success', 'Dados atualizados com sucesso')
            res.redirect('/')
        }).catch((err) => {
            console.log(err);
            req.flash('error', 'Algo deu errado ao atualizar os dados do aluno.' + aluno.nome)
            res.redirect("/")

        })
    } else {
        dao.save(req.body).then((result) => {
            req.flash('success', 'Aluno salvo com sucesso')
            res.redirect("/");
        }).catch((err) => {
            console.log(err);
            req.flash('error', 'Algo deu errado ao salvar os dados do aluno.')
            res.redirect("/");
        });
    }

});
app.listen(3000, '0.0.0.0', function () {
    console.log('Servidor iniciado');
});
