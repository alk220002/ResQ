const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname)));

// Hauptseite
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'htmls', 'index.html'));
});

// Alle anderen HTML-Seiten
app.get('/:page', (req, res) => {
  const page = req.params.page;
  if (page.endsWith('.html')) {
    res.sendFile(path.join(__dirname, 'htmls', page));
  } else {
    res.status(404).send('Seite nicht gefunden');
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});