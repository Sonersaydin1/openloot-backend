const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/prices', async (req, res) => {
  try {
    // Örnek veri
    const prices = [
      { name: "Item 1", price: "$10", link: "https://openloot.com/item/1" },
      { name: "Item 2", price: "$25", link: "https://openloot.com/item/2" }
    ];
    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: "Veri alınamadı" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend API http://localhost:${PORT} adresinde çalışıyor`);
});