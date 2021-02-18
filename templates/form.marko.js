// Compiled using marko@4.23.12 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud_node$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script><title>Cadastro de aluno</title><!estilização><style>\r\n    h3{\r\n        text-align: center;\r\n        font-family: sans-serif\r\n        ;\r\n    }\r\n   ::placeholder { \r\n   color: black;}\r\n    </style></head><body style=\"background-color: #8BC6EC;\r\nbackground-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)\"><!Barra de navegação><nav><div style=\"background-color: black\" class=nav-wrapper><a href=/  class=brand-logo>Yasogami High School</a><ul id=nav-mobile class=\"right hide-on-med-and-down\"><li><a href=/ > Pagina inicial </a></li><li><a href=/form>Cadastar novo aluno</a></li></ul></div></nav><div class=container style=\"margin-bottom: 20px\"><h3>Cadastro de Novo Aluno</h3><br><form action=/alunos method=post><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "><!div do input name><div class=row><div class=row><div class=\"input-field col s12\"><input id=icon_prefix type=text class=validate name=nome" +
    marko_attr("value", data.nome) +
    "><label for=icon_prefix> <span class=black-text> Nome do aluno</span></label></div></div></div><!div input email><div class=row><div class=\"input-field col s12\"><input id=email type=email class=validate name=email" +
    marko_attr("value", data.email) +
    " placeholder=exemplo@email.com><label for=email><span class=black-text>Email</span></label></div></div><! Selecionar o curso><label> <span class=black-text> Curso </span></label><p><label><input name=curso value=\"Tecnologo em ADS\" type=radio" +
    marko_attr("checked", data.curso == "Tecnologo em ADS") +
    "><span class=black-text> Tecnologo em ADS</span></label></p><p><label><input name=curso value=\"Informatica para Internet\" type=radio" +
    marko_attr("checked", data.curso == "Informatica para Internet") +
    "><span class=black-text> Tec. em Informatica para Internet</span></label></p><p><label><input name=curso value=Qualidade type=radio" +
    marko_attr("checked", data.curso == "Qualidade") +
    "><span class=black-text> Tec. em Gestão de Qualidade</span></label></p><p><label><input name=curso type=radio disabled=disabled><span class=grey-text> Design Gráfico [ Em Breve ]</span></label></p><!botões cancelar  e salvar ><a href=/  class=\"waves-effect waves-light btn\" style=\"margin-right: 15px\"> Cancelar</a><button class=\"waves-effect waves-light btn\" type=submit>Salvar</button></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "53");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud_node$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
