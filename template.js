function gentemplate(title,desc,smdesc,roundamount,watermark,bgc,games) {
  data = `<!DOCTYPE html>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here"/>
  <script src="https://use.fontawesome.com/3e74146b75.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="styles.css">
  <title>${title}</title>
  </head>
  <style>
  body {
    background-color: ${bgc};
    hyphens: auto;
    overflow-wrap: anywhere;
  }
  .centered-y {
    position: relative;
    top: "40%";
  }
  #logo {
    width: 75%;
  }
  .sm {
    margin: 20px;
    width: 75%;
    border-collapse: separate;
    border: 5px black solid;
    border-radius: ${roundamount};
  }
  .ssm {
    margin: 20px;
    width: 50%;
    border-collapse: separate;
    border: 5px black solid;
    border-radius: ${roundamount}px;
  }
  a:hover{
    color:rgb(0, 132, 255);
  }
  a {
    color:rgb(0, 174, 255);
  }
  </style>
  <body>
    <!--Bootstrap Installers-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
  <script async src="https://cse.google.com/cse.js?cx=d3aa5a4e98a9049d4"></script>
  <center>
    <div>
      <div class="jumbotron sm">
        <h1 class="display-4">${title}</h1>
        <p class="lead">${desc}
        <hr class="my-4">
        ${smdesc}
        </div>
    </div>
    `
    games.forEach(element => {
      data += `
      <a href="${element[1]}">
      <div class="jumbotron ssm rounded">
        <h1 class="display-4">${element[0]}</h1>
        <p class="lead">${element[2]}</p>
      </div>
      </a>
      `
    });
    if(watermark) {
      data += `
      <a href='https://www.lexaloffle.com/bbs/?uid=68337'>HTML Template by SealProgrammer</a>`
    }
    data +=`
  </center>
  </body>
  </html>
  `
  return data;
}
