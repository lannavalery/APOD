const botao = $("#botaoSend");
const titulo = $("#titulo");
const conteudo = $("#conteudo");
const img = $("#fotoVideo");
let obj;

botao.on("click", function (event) {
  event.preventDefault();
  pedido();
});

function pedido() {
  $(`#data`).val();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=dhlggRiSdNkobaNCGmOjZBpJlUJRAdY9eubhX2bq&date=${$("#data").val()}`,

    success: function (result) {
      obj = result;
      titulo.html(obj.title);
      conteudo.html(obj.explanation);
      if (obj.media_type != "video") {
        img.html(`
        <img width = '400' heigth = '400' id="foto" src="${obj.url}"></img>
        `);
      } else {
        img.html(`
      <iframe id="video" src="${obj.url}"></iframe>
      `);
      }
    },
  });
}