const fs = require('fs');
const axios = require('axios');
require('dotenv').config({path:'../../../.env'});

const API_KEY = process.env.CMC_API_KEY;
const symbols = [
  "BTC",
  "ETH",
  "USDT",
  "DOT",
  "XRP",
  "ADA",
  "LINK",
  "LTC",
  "BCH",
  "BNB",
  "XLM",
  "USDC",
  "WBTC",
  "AAVE",
  "BSV",
  "UNI",
  "EOS",
  "XMR",
  "XTZ",
  "TRX",
  "SNX",
  "VET",
  "XEM",
  "THETA",
  "NEO",
  "ATOM",
  "CRO",
  "DAI",
  "MKR",
  "LEO"
];

const cmcLogoScraper = (async () => {
  const symbolStrs = symbols.join();

  const request = {
    method: 'get',
    url: `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info`,
    headers: {
      'X-CMC_PRO_API_KEY': API_KEY
    },
    json: true,
    gzip: true,
    params: {
      'symbol': symbolStrs,
      'aux': "logo",
    }
  };

  const coins = (await axios(request)).data.data;
  let coinURLS = {};

  for (const coin in coins) {
    coinURLS[coins[coin].symbol] = coins[coin].logo;
  }

  fs.writeFileSync('../../client/utils/cmc_logo_urls.json', JSON.stringify(coinURLS), (err, res) => {
    if (err) console.error('error', err);
  });
});

cmcLogoScraper();
