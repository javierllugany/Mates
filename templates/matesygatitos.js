const template = function(dataFrontpage){
  let raw =
  `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>Mates y Gatitos</title>
      <link rel="stylesheet" href="/public/mates.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Schoolbell&display=swap" rel="stylesheet">
    </head>
    <body>
      <div id="telonTotal">
        <h2 id="queHaces"></h2>
        <input type="submit" id="sigue" value="Sigo yo">
        <input type="submit" id="cambia" value="Ahora le toca a otre">
      </div>
      <div id="participante">
        <h2 id="nombre1"></h2>
      </div>
      <div id="pizarra">
        <div id="cuenta1">
          <div id="a1"></div>
          <div id="signo"></div>
          <div id="b1"></div>
          <div id="linea">____</div>
          <div id="c1">
            <input type="text" name="resultado" id="resultado" size="4" maxlength="4">
          </div>
          <input type="submit" id="prueba" value="Comprobar">
        </div>
      </div>
    </body>
    <script src="/public/matescript.js"></script>
    <script type="text/javascript">
      matesYGatos.presentacion();
    </script>
  </html>
  `;
    return raw;
}

module.exports = template;
