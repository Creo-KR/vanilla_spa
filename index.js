const express = require("express");
const app = express();
const port = 5000;

const { getMetaData } = require("./seo.js");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.redirect("/spa/");
});

app.get("/spa/*", (req, res) => {
  res.send(`<html>
<head>
    <title>SPA 페이지</title>
    <link rel="stylesheet" href="../src/styles/reset.css">
    <link rel="stylesheet" href="../src/styles/style.css">
    ${getMetaData()}
    <script type="module" src="../src/index.js"></script>
</head>
<body>
</body>
</html>`);
});

app.use(express.static("public"));
