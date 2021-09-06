const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.redirect("/html/");
});

app.get("/html/*", (req, res) => {
  res.send(`<html>
<head>
    <title>SPA 페이지</title>
    <link rel="stylesheet" href="../src/styles/reset.css">
    <link rel="stylesheet" href="../src/styles/style.css">
    <script type="module" src="../src/index.js"></script>
</head>
<body>
</body>
</html>`);
});

app.use(express.static("public"));
