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

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script><title>Cadastro</title></head><body class=container><h1>Cadastro</h1><br><form action=/alunos method=post><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "><input type=text name=nome placeholder=nome" +
    marko_attr("value", data.nome) +
    "><input type=email name=email placeholder=email" +
    marko_attr("value", data.email) +
    "><br><br><p><label><input name=curso value=\"Tecnologo em ADS\" type=radio" +
    marko_attr("checked", data.curso == "Tecnologo em ADS") +
    "><span> Tecnologo em ADS</span></label></p><p><label><input name=curso value=\"Informatica para Internet\" type=radio" +
    marko_attr("checked", data.curso == "Informatica para Internet") +
    "><span> Tec. em Informatica para Internet</span></label></p><p><label><input name=curso value=Qualidade type=radio" +
    marko_attr("checked", data.curso == "Qualidade") +
    "><span> Tec. em Gestão de Qualidade</span></label></p><a href=/  class=\"waves-effect waves-light btn\">Cancelar</a><button class=\"waves-effect waves-light btn\" type=submit>Salvar</button></form><script src=main.js></script><script src=jquery-3.5.1.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

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
