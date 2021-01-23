const express = require('express');
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.CMC_API_KEY;

const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.static('dist'));

app.get('/api/getCryptoData', (req, res) => {
  const request = {
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    headers: {
      'X-CMC_PRO_API_KEY': API_KEY
    },
    json: true,
    gzip: true,
    params: {
      'start': "1",
      'limit': "20",
      'convert': 'USD'
    }
  };

  axios(request)
    .then(response => {
      const { data } = response;
      res.status(200).json(data);
    })
    .catch(error => {
      console.error(error);
      res.status(400).json({ error });
    });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
