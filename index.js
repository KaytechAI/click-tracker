const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', async (req, res) => {
  const { company, type } = req.query;

  if (company && type) {
    await fetch("https://hook.us.make.com/your-make-webhook-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, type })
    });
  }

  if (type === 'schedule') {
    return res.redirect(302, 'https://9figuremedia.com/meeting');
  } else if (type === 'website') {
    return res.redirect(302, 'https://9figuremedia.com');
  }

  res.send("Missing or invalid parameters.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on port ${port}`));
