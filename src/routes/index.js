const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
      "name": "Bruno",
      "website": "Brunoweb.com"
    };
  res.json(data);
});

module.exports = router;
