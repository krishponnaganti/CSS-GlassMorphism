import "./styles.css";

document.getElementById("app").innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glassmorphism effect by ui.glass</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <img class="shape" src="https://s3.us-east-2.amazonaws.com/ui.glass/shape.svg" alt="">
  <div class="card">
    <h3 class="card-title">Glassmorphism is awesome</h3>
    <p>A modern CSS UI lvibrary based on the glassmorphism design principles that will help you quickly design and build beautiful websites and applications.</p>
    <a href="https://ui.glass">Read more</a>
  </div>
</body>
</html>`;
